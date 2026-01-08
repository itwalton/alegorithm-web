import { useState, useMemo } from 'react';
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
import { type HopLineItem } from './hop-inventory.model';
import useGetHopInventory from './useGetHopInventory';
import AromaHopsDonutChart from './charts/AromaHopsDonutChart';
import type { Widget } from '../shared/widgets/widgets.model';
import Widgets from '../shared/widgets/Widgets';

const getRowBackgroundColor = (datePurchased: Date, theme: any) => {
  const now = new Date();
  const monthsDiff = (now.getTime() - datePurchased.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (monthsDiff > 12) {
    return `${theme.palette.error.main}15`; // Red hue with 15% opacity
  } else if (monthsDiff > 6) {
    return `${theme.palette.secondary.main}15`; // Yellow hue with 15% opacity
  }
  return 'transparent';
};

export default function HopInventoryTable() {
  const theme = useTheme();
  const { data: hopLineItems } = useGetHopInventory();
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: "aroma-hops-donut",
      label: "Aroma Hops",
      visible: true,
      component: <AromaHopsDonutChart />
    }
  ]);

  const handleToggleWidget = (id: string, visible: boolean) => {
    setWidgets(prevWidgets =>
      prevWidgets.map(widget =>
        widget.id === id ? { ...widget, visible } : widget
      )
    );
  };

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<HopLineItem>();
    return [
      columnHelper.accessor((row) => row.hop.name, {
        id: 'hopName',
        header: 'Name',
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.hop.purpose, {
        id: 'hopPurpose',
        header: 'Purpose',
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor('datePurchased', {
        id: 'datePurchased',
        header: 'Date Purchased',
        cell: (info) => info.getValue().toLocaleDateString(),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.hop.dateHarvested, {
        id: 'dateHarvested',
        header: 'Date Harvested',
        cell: (info) => info.getValue()?.toLocaleDateString() ?? '-',
        enableSorting: true,
      }),
    ];
  }, []);

  const data = useMemo(() => hopLineItems, [hopLineItems]);

  const table = useReactTable({
    data,
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
    autoResetAll: false,
  });

  return (
    <Box>
      <Widgets widgets={widgets} onToggleWidget={handleToggleWidget} />

      <Paper sx={{ borderRadius: 2, backgroundColor: '#0a0a0a', paddingY: 2, paddingX: 2, minHeight: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            sx={{
              width: '33.333%',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#050505',
                borderRadius: 1,
                '& fieldset': {
                  borderColor: '#1a1a1a',
                },
                '&:hover fieldset': {
                  borderColor: '#2a2a2a',
                },
              },
            }}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id}>
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <TableSortLabel
                          active={!!header.column.getIsSorted()}
                          direction={header.column.getIsSorted() === 'desc' ? 'desc' : 'asc'}
                          onClick={(event) => {
                            const handler = header.column.getToggleSortingHandler();
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
                const backgroundColor = getRowBackgroundColor(row.original.datePurchased, theme);
                return (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor,
                      '&:hover': {
                        backgroundColor: backgroundColor !== 'transparent'
                          ? `${backgroundColor}cc`
                          : '#0f0f0f',
                      },
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
