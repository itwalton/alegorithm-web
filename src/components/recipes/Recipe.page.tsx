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
  Chip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { type Recipe } from './recipe.model';

const mockData: Recipe[] = [
  {
    id: 'R001',
    name: 'West Coast IPA',
    dateAdded: new Date('2024-01-15'),
    lastBrewed: new Date('2024-03-20'),
    isPublic: true,
    style: 'American IPA',
    awards: ['Gold - 2023 State Fair', 'Best IPA - Local Competition'],
  },
  {
    id: 'R002',
    name: 'Belgian Wit',
    dateAdded: new Date('2024-02-10'),
    lastBrewed: new Date('2024-04-05'),
    isPublic: true,
    style: 'Witbier',
    awards: [],
  },
  {
    id: 'R003',
    name: 'Chocolate Stout',
    dateAdded: new Date('2024-03-05'),
    isPublic: false,
    style: 'Sweet Stout',
    awards: ['Silver - Regional Brew Fest'],
  },
  {
    id: 'R004',
    name: 'Summer Saison',
    dateAdded: new Date('2024-04-12'),
    lastBrewed: new Date('2024-06-15'),
    isPublic: true,
    style: 'Saison',
    awards: [],
  },
];

const columnHelper = createColumnHelper<Recipe>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('style', {
    header: 'Style',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('dateAdded', {
    header: 'Date Added',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
  columnHelper.accessor('lastBrewed', {
    header: 'Last Brewed',
    cell: (info) => {
      const value = info.getValue();
      return value ? value.toLocaleDateString() : 'Never';
    },
  }),
  columnHelper.accessor('isPublic', {
    header: 'Public',
    cell: (info) => (
      <Chip
        label={info.getValue() ? 'Public' : 'Private'}
        color={info.getValue() ? 'success' : 'default'}
        size="small"
      />
    ),
  }),
  columnHelper.accessor('awards', {
    header: 'Awards',
    cell: (info) => {
      const awards = info.getValue();
      return awards.length > 0 ? (
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {awards.map((award, index) => (
            <Chip key={index} label={award} size="small" color="primary" />
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          None
        </Typography>
      );
    },
  }),
];

export default function RecipePage() {
  const theme = useTheme();

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
        Recipes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your brewing recipes and track awards.
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
