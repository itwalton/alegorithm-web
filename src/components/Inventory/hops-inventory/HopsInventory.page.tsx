import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useReactTable, getCoreRowModel, createColumnHelper, flexRender } from '@tanstack/react-table'
import { type HopLineItem } from './hops-inventory.model'

const mockData: HopLineItem[] = [
  {
    id: '1',
    datePurchased: new Date('2024-01-20'),
    hop: {
      id: 'H001',
      name: 'Cascade',
      purpose: 'aroma',
      dateHarvested: new Date('2023-09-15')
    }
  },
  {
    id: '2',
    datePurchased: new Date('2024-02-10'),
    hop: {
      id: 'H002',
      name: 'Centennial',
      purpose: 'bittering',
      dateHarvested: new Date('2023-09-20')
    }
  },
  {
    id: '3',
    datePurchased: new Date('2024-03-05'),
    hop: {
      id: 'H003',
      name: 'Citra',
      purpose: 'aroma'
    }
  }
]

const columnHelper = createColumnHelper<HopLineItem>()

const columns = [
  columnHelper.accessor(row => row.hop.id, {
    id: 'hopId',
    header: 'Hop ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.hop.name, {
    id: 'hopName',
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.hop.purpose, {
    id: 'hopPurpose',
    header: 'Purpose',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('datePurchased', {
    header: 'Date Purchased',
    cell: info => info.getValue().toLocaleDateString(),
  }),
  columnHelper.accessor(row => row.hop.dateHarvested, {
    id: 'dateHarvested',
    header: 'Date Harvested',
    cell: info => info.getValue()?.toLocaleDateString() ?? '-',
  }),
]

export default function HopsInventoryPage() {
  const theme = useTheme()

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
        Hops
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your hop varieties for brewing - bittering, flavor, and aroma hops.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
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
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
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
  )
}
