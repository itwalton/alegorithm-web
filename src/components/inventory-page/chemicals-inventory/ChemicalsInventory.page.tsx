import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { type ChemicalLineItem } from './chemicals-inventory.model';

const mockData: ChemicalLineItem[] = [
  {
    id: '1',
    datePurchased: new Date('2024-01-10'),
    chemical: {
      id: 'C001',
      name: 'Irish Moss',
      format: 'dry',
      quantity: 100,
    },
  },
  {
    id: '2',
    datePurchased: new Date('2024-02-15'),
    chemical: {
      id: 'C002',
      name: 'Phosphoric Acid',
      format: 'wet',
      volume: 500,
    },
  },
  {
    id: '3',
    datePurchased: new Date('2024-03-01'),
    chemical: {
      id: 'C003',
      name: 'Gypsum',
      format: 'dry',
      quantity: 250,
    },
  },
];

const columnHelper = createColumnHelper<ChemicalLineItem>();

const columns = [
  columnHelper.accessor((row) => row.chemical.id, {
    id: 'chemicalId',
    header: 'Chemical ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.chemical.name, {
    id: 'chemicalName',
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.chemical.format, {
    id: 'chemicalFormat',
    header: 'Format',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.chemical.quantity, {
    id: 'quantity',
    header: 'Quantity (g)',
    cell: (info) => info.getValue() ?? '-',
  }),
  columnHelper.accessor((row) => row.chemical.volume, {
    id: 'volume',
    header: 'Volume (ml)',
    cell: (info) => info.getValue() ?? '-',
  }),
  columnHelper.accessor('datePurchased', {
    header: 'Date Purchased',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

export default function ChemicalsInventoryPage() {
  const theme = useTheme();

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.info.main }}
      >
        Chemicals
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your brewing chemicals - additives, acids, sanitizers, and
        processing aids.
      </Typography>
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
