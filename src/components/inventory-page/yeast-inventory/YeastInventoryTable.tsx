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
import useGetYeastInventoryRecords from './useGetYeastInventoryRecords';
import type { Yeast } from './yeast-inventory.model';
import type { LineItem } from '../inventory.type';
import { getTableRowColorByDatePurchased } from '../shared/styling.utils';
import { upperFirst } from 'lodash';
import YeastFormatBarChart from './charts/YeastFormatBarChart';
import type { Widget } from '../shared/widgets/widgets.model';
import Widgets from '../shared/widgets/Widgets';

type YeastTableRow = LineItem & {
  yeast: Yeast;
};

interface TableMeta {
  align?: 'left' | 'center' | 'right';
}

export default function YeastInventoryTable() {
  const theme = useTheme();
  const { data: yeastInventoryRecords } = useGetYeastInventoryRecords();
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'yeast-format-bar',
      label: 'Yeast Format',
      visible: true,
      component: <YeastFormatBarChart />,
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
    const columnHelper = createColumnHelper<YeastTableRow>();
    return [
      columnHelper.accessor((row) => row.yeast.name, {
        id: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.yeast.format, {
        id: 'format',
        header: 'Format',
        cell: (info) => upperFirst(info.getValue()),
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
      columnHelper.accessor((row) => row.yeast.manufacturer, {
        id: 'manufacturer',
        header: 'Manufacturer',
        cell: (info) => {
          const manufacturer = info.getValue();
          const displayNames: Record<string, string> = {
            wyeast: 'Wyeast',
            white_labs: 'White Labs',
            fermentis: 'Fermentis',
          };
          return displayNames[manufacturer] || upperFirst(manufacturer);
        },
        enableSorting: true,
        meta: { align: 'center' },
      }),
      columnHelper.accessor((row) => row.yeast.dateProduced, {
        id: 'dateProduced',
        header: 'Date Produced',
        cell: (info) => info.getValue().toLocaleDateString(),
        enableSorting: true,
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
    data: yeastInventoryRecords.flatMap<YeastTableRow>((record) =>
      record.lineItems.map((lineItem) => ({
        ...lineItem,
        yeast: record.item,
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
