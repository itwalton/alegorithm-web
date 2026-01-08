import { useState, useMemo } from 'react';
import { upperFirst } from 'lodash';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  TableSortLabel,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
  type SortingState,
} from '@tanstack/react-table';
import { type Hop } from './hop-inventory.model';
import type { LineItem } from '../inventory.type';
import useGetHopInventoryRecords from './useGetHopInventoryRecords';
import AromaHopsDonutChart from './charts/AromaHopsDonutChart';
import type { Widget } from '../shared/widgets/widgets.model';
import Widgets from '../shared/widgets/Widgets';
import { getTableRowColorByDatePurchased } from '../shared/styling.utils';

type HopTableRow = LineItem & {
  hop: Hop;
};

interface TableMeta {
  align?: 'left' | 'center' | 'right';
}

export default function HopInventoryTable() {
  const theme = useTheme();
  const { data: hopInventoryRecords } = useGetHopInventoryRecords();
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'aroma-hops-donut',
      label: 'Aroma Hops',
      visible: true,
      component: <AromaHopsDonutChart />,
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
    const columnHelper = createColumnHelper<HopTableRow>();
    return [
      columnHelper.accessor((row) => row.hop.name, {
        id: 'name',
        header: 'Name',
        cell: (info) => upperFirst(info.getValue()),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.hop.usage, {
        id: 'usage',
        header: 'Usage',
        cell: (info) => info.getValue().map(upperFirst).join(', '),
        enableSorting: true,
        meta: { align: 'center' },
      }),
      columnHelper.accessor((row) => row.amount, {
        id: 'amount',
        header: 'Amount',
        cell: (info) => {
          const amount = info.getValue();
          return `${amount.value} ${amount.unit}`;
        },
        enableSorting: false,
        meta: { align: 'center' },
      }),
      columnHelper.accessor('datePurchased', {
        id: 'datePurchased',
        header: 'Date Purchased',
        cell: (info) => info.getValue().toLocaleDateString(),
        enableSorting: true,
        meta: { align: 'center' },
      }),
    ];
  }, []);

  const table = useReactTable({
    data: hopInventoryRecords.flatMap<HopTableRow>((record) =>
      record.lineItems.map((lineItem) => ({
        ...lineItem,
        hop: record.item,
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
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      key={header.id}
                      align={
                        (header.column.columnDef.meta as TableMeta)?.align ||
                        'left'
                      }
                    >
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
              {table.getRowModel().rows.map((row) => {
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
                      <TableCell
                        key={cell.id}
                        align={
                          (cell.column.columnDef.meta as TableMeta)?.align ||
                          'left'
                        }
                      >
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
