import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@mui/material';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { type ChemicalLineItem } from './chemicals-inventory.model';
import useGetChemicalsInventory from './useGetChemicalsInventory';
import WaterChemicalsWarningsList from './charts/WaterChemicalsWarningsList';

const chemicalsColumnHelper = createColumnHelper<ChemicalLineItem>();
const chemicalsColumns = [
  chemicalsColumnHelper.accessor((row) => row.chemical.id, {
    id: 'chemicalId',
    header: 'Chemical ID',
    cell: (info) => info.getValue(),
  }),
  chemicalsColumnHelper.accessor((row) => row.chemical.name, {
    id: 'chemicalName',
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  chemicalsColumnHelper.accessor((row) => row.chemical.format, {
    id: 'chemicalFormat',
    header: 'Format',
    cell: (info) => info.getValue(),
  }),
  chemicalsColumnHelper.accessor((row) => row.chemical.quantity, {
    id: 'quantity',
    header: 'Quantity (g)',
    cell: (info) => info.getValue() ?? '-',
  }),
  chemicalsColumnHelper.accessor((row) => row.chemical.volume, {
    id: 'volume',
    header: 'Volume (ml)',
    cell: (info) => info.getValue() ?? '-',
  }),
  chemicalsColumnHelper.accessor('datePurchased', {
    header: 'Date Purchased',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

export default function ChemicalsInventoryPage() {
  const { data: chemicalLineItems } = useGetChemicalsInventory();

  const table = useReactTable({
    data: chemicalLineItems,
    columns: chemicalsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Box>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={4}>
            <WaterChemicalsWarningsList />
          </Grid>

          <Grid size={4}>
          </Grid>

          <Grid size={4}>

          </Grid>
        </Grid>
      </Box>

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
