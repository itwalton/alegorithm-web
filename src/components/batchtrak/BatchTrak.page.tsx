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
import { type Batch } from './batch.model';

const mockData: Batch[] = [
  {
    id: 'BD001',
    name: 'Spring IPA Brew',
    recipe: 'West Coast IPA',
    date: new Date('2024-03-15'),
  },
  {
    id: 'BD002',
    name: 'Belgian Wit Batch',
    recipe: 'Belgian Wit',
    date: new Date('2024-04-05'),
  },
  {
    id: 'BD003',
    name: 'Summer Saison Session',
    recipe: 'Summer Saison',
    date: new Date('2024-06-15'),
  },
];

const columnHelper = createColumnHelper<Batch>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('recipe', {
    header: 'Recipe',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

export default function BatchTrakPage() {
  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        BatchTrak
      </Typography>
      <Typography variant="body1" gutterBottom>
        Track your brewing batches and sessions.
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
