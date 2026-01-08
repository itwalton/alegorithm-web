import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
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

  const table = useReactTable({
    data: hopLineItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={4}>
          <AromaHopsDonutChart />
        </Grid>

        <Grid size={4}>
        </Grid>

        <Grid size={4}>

        </Grid>
      </Grid>

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
