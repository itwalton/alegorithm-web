import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box, Typography, Grid } from "@mui/material";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useGetFermentablesInventory from "./useGetFermentablesInventory";
import type { FermentableLineItem } from "./fermentables-inventory.model";
import InventoryOnHandTimeseriesChart from "./charts/InventoryOnHandTimeseriesChart";

const fermentablesColumnHelper = createColumnHelper<FermentableLineItem>();
const fermentablesColumns = [
  fermentablesColumnHelper.accessor((row) => row.fermentable.id, {
    id: 'fermentableId',
    header: 'Fermentable ID',
    cell: (info) => info.getValue(),
  }),
  fermentablesColumnHelper.accessor((row) => row.fermentable.type, {
    id: 'fermentableType',
    header: 'Fermentable Type',
    cell: (info) => info.getValue(),
  }),
  fermentablesColumnHelper.accessor('datePurchased', {
    header: 'Date Purchased',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

export default function FermentablesInventoryTable() {
  const { data: fermentableInventoryRecords } = useGetFermentablesInventory();

  const fermentablesTable = useReactTable({
    data: fermentableInventoryRecords,
    columns: fermentablesColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={4}>
          <InventoryOnHandTimeseriesChart />
        </Grid>

        <Grid size={4}>
        </Grid>

        <Grid size={4}>

        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            {fermentablesTable.getHeaderGroups().map((headerGroup) => (
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
            {fermentablesTable.getRowModel().rows.map((row) => (
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