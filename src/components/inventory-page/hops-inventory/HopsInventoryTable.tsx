import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { type HopLineItem } from './hops-inventory.model';
import useGetHopsInventory from './useGetHopsInventory';
import AromaHopsDonutChart from './charts/AromaHopsDonutChart';
import type { Widget } from '../shared/widgets/widgets.model';
import Widgets from '../shared/widgets/Widgets';

const columnHelper = createColumnHelper<HopLineItem>();

const columns = [
  columnHelper.accessor((row) => row.hop.id, {
    id: 'hopId',
    header: 'Hop ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.hop.name, {
    id: 'hopName',
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.hop.purpose, {
    id: 'hopPurpose',
    header: 'Purpose',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('datePurchased', {
    header: 'Date Purchased',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
  columnHelper.accessor((row) => row.hop.dateHarvested, {
    id: 'dateHarvested',
    header: 'Date Harvested',
    cell: (info) => info.getValue()?.toLocaleDateString() ?? '-',
  }),
];

export default function HopsInventoryTable() {
  const { data: hopLineItems } = useGetHopsInventory();

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

  const table = useReactTable({
    data: hopLineItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Widgets widgets={widgets} onToggleWidget={handleToggleWidget} />

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
