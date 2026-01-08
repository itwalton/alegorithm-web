import { useState, useMemo } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TextField,
  TableSortLabel,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  type SortingState,
} from '@tanstack/react-table';
import useGetFermentableInventoryRecords from './useGetFermentableInventoryRecords';
import type { Fermentable } from './fermentable-inventory.model';
import type { LineItem } from '../inventory.type';
import InventoryOnHandTimeseriesChart from './charts/InventoryOnHandTimeseriesChart';
import type { Widget } from '../shared/widgets/widgets.model';
import Widgets from '../shared/widgets/Widgets';
import { getTableRowColorByDatePurchased } from '../shared/styling.utils';
import { upperFirst } from 'lodash';

type FermentableTableRow = LineItem & {
  fermentable: Fermentable;
};

export default function FermentableInventoryTable() {
  const theme = useTheme();
  const { data: fermentableInventoryRecords } =
    useGetFermentableInventoryRecords();
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'inventory-on-hand',
      label: 'Inventory on Hand',
      visible: true,
      component: <InventoryOnHandTimeseriesChart />,
    },
  ]);

  const handleToggleWidget = (id: string, visible: boolean) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id ? { ...widget, visible } : widget
      )
    );
  };

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<FermentableTableRow>();
    return [
      columnHelper.accessor((row) => row.fermentable.name, {
        id: 'name',
        header: 'Name',
        cell: (info) => upperFirst(info.getValue()),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.fermentable.type, {
        id: 'type',
        header: 'Type',
        cell: (info) => upperFirst(info.getValue()),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.fermentable.gravityUnits, {
        id: 'gravityUnits',
        header: 'Gravity Units',
        cell: (info) => `${info.getValue()} GU`,
        enableSorting: false,
      }),
      columnHelper.accessor((row) => row.amount, {
        id: 'amount',
        header: 'Amount',
        cell: (info) => {
          const amount = info.getValue();
          return `${amount.value} ${amount.unit}`;
        },
        enableSorting: false,
      }),
      columnHelper.accessor('datePurchased', {
        id: 'datePurchased',
        header: 'Date Purchased',
        cell: (info) => info.getValue().toLocaleDateString(),
        enableSorting: true,
      }),
    ];
  }, []);

  const fermentableTable = useReactTable({
    data: fermentableInventoryRecords.flatMap<FermentableTableRow>((record) =>
      record.lineItems.map((lineItem) => ({
        ...lineItem,
        fermentable: record.item,
      }))
    ),
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    autoResetAll: false,
  });

  return (
    <Box>
      <Widgets widgets={widgets} onToggleWidget={handleToggleWidget} />

      <Paper sx={{ borderRadius: 2, paddingY: 2, paddingX: 2, minHeight: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              {fermentableTable.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id}>
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <TableSortLabel
                          active={!!header.column.getIsSorted()}
                          direction={
                            header.column.getIsSorted() === 'desc'
                              ? 'desc'
                              : 'asc'
                          }
                          onClick={(event) => {
                            const handler =
                              header.column.getToggleSortingHandler();
                            if (handler) {
                              handler(event);
                            }
                          }}
                          hideSortIcon={false}
                          sx={{
                            '& .MuiTableSortLabel-icon': {
                              opacity: header.column.getIsSorted() ? 1 : 0.3,
                            },
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </TableSortLabel>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {fermentableTable.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor: getTableRowColorByDatePurchased(
                        theme,
                        row.original.datePurchased
                      ),
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
