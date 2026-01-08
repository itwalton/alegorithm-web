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
import { type FermentableLineItem } from './fermentable-inventory.model';

const mockData: FermentableLineItem[] = [
  {
    id: '1',
    datePurchased: new Date('2024-01-15'),
    fermentable: {
      id: 'F001',
      name: 'Pale Ale Malt',
      format: 'malt',
      gravityUnits: 1.037,
    },
  },
  {
    id: '2',
    datePurchased: new Date('2024-02-20'),
    fermentable: {
      id: 'F002',
      name: 'Caramel 60L',
      format: 'malt',
      gravityUnits: 1.034,
    },
  },
  {
    id: '3',
    datePurchased: new Date('2024-03-10'),
    fermentable: {
      id: 'F003',
      name: 'Light Malt Extract',
      format: 'extract',
      gravityUnits: 1.044,
    },
  },
];

const columnHelper = createColumnHelper<FermentableLineItem>();

const columns = [
  columnHelper.accessor((row) => row.fermentable.name, {
    id: 'fermentableName',
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.fermentable.format, {
    id: 'fermentableFormat',
    header: 'Format',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.fermentable.gravityUnits, {
    id: 'gravityUnits',
    header: 'Gravity Units',
    cell: (info) => info.getValue().toFixed(3),
  }),
  columnHelper.accessor('datePurchased', {
    header: 'Date Purchased',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

export default function FermentableInventoryPage() {
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
        sx={{ color: theme.palette.secondary.main }}
      >
        Fermentables
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your brewing fermentables - malts, grains, and sugars.
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
