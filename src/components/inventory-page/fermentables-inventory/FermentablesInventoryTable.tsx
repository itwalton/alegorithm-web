import { useState, useMemo } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, TextField, TableSortLabel, Tooltip, IconButton, Menu, MenuItem, Checkbox, ListItemText, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, getFilteredRowModel, getSortedRowModel, type SortingState } from "@tanstack/react-table";
import useGetFermentablesInventory from "./useGetFermentablesInventory";
import type { FermentableLineItem } from "./fermentables-inventory.model";
import InventoryOnHandTimeseriesChart from "./charts/InventoryOnHandTimeseriesChart";
import { BiCog } from "react-icons/bi";

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

export default function FermentablesInventoryTable() {
  const theme = useTheme();
  const { data: fermentableInventoryRecords } = useGetFermentablesInventory();
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showInventoryOnHand, setShowInventoryOnHand] = useState(true);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggleInventoryOnHand = () => {
    setShowInventoryOnHand((prev) => !prev);
  };

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<FermentableLineItem>();
    return [
      columnHelper.accessor((row) => row.fermentable.name, {
        id: 'fermentableName',
        header: 'Name',
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.fermentable.format, {
        id: 'fermentableFormat',
        header: 'Format',
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.fermentable.gravityUnits, {
        id: 'gravityUnits',
        header: 'Gravity Units',
        cell: (info) => info.getValue().toFixed(3),
        enableSorting: false,
      }),
      columnHelper.accessor('datePurchased', {
        id: 'datePurchased',
        header: 'Date Purchased',
        cell: (info) => info.getValue().toLocaleDateString(),
        enableSorting: true,
      }),
    ];
  }, []);

  const data = useMemo(() => fermentableInventoryRecords, [fermentableInventoryRecords]);

  const fermentablesTable = useReactTable({
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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title="Widget Settings">
          <IconButton
            color="inherit"
            aria-label="settings"
            onClick={handleMenuOpen}
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <BiCog />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem disabled>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Show/Hide Widgets
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleToggleInventoryOnHand}>
            <Checkbox checked={showInventoryOnHand} />
            <ListItemText primary="Inventory on Hand" />
          </MenuItem>
        </Menu>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {showInventoryOnHand && (
          <Grid size={4}>
            <InventoryOnHandTimeseriesChart />
          </Grid>
        )}

        <Grid size={4}>
        </Grid>

        <Grid size={4}>

        </Grid>
      </Grid>

      <Paper sx={{ borderRadius: 2, overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search by name, format, or date..."
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
              {fermentablesTable.getHeaderGroups().map((headerGroup) => (
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
              {fermentablesTable.getRowModel().rows.map((row) => {
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