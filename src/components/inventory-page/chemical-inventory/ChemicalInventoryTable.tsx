import { useState, useMemo, Fragment } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TableSortLabel,
  IconButton,
  Collapse,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  type SortingState,
  type ExpandedState,
} from '@tanstack/react-table';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { type Chemical } from './chemical-inventory.model';
import useGetChemicalInventoryRecord from './useGetChemicalInventoryRecord';
import WaterChemicalsWarningsList from './charts/WaterChemicalsWarningsList';
import type { Widget } from '../shared/widgets/widgets.model';
import Widgets from '../shared/widgets/Widgets';
import { getTableRowColorByDatePurchased } from '../shared/styling.utils';
import type { LineItem, Measurement } from '../inventory.type';
import { upperFirst } from 'lodash';

type ChemicalTableRow = {
  chemical: Chemical;
  amountOnHand: Measurement;
  isAggregate: boolean;
  subRows: LineItem[];
  datesPurchased: Date[];
};

export default function ChemicalInventoryPage() {
  const theme = useTheme();
  const { data: chemicalInventoryRecords } = useGetChemicalInventoryRecord();
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'water-chemicals-warnings',
      label: 'Water Chemicals Warnings',
      visible: true,
      component: <WaterChemicalsWarningsList />,
    },
  ]);

  const handleToggleWidget = (id: string, visible: boolean) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id ? { ...widget, visible } : widget
      )
    );
  };

  // Aggregate data by chemical ID
  const chemicalTableRows = useMemo<ChemicalTableRow[]>(
    () =>
      chemicalInventoryRecords.map((chemicalInventoryRecord) => ({
        chemical: chemicalInventoryRecord.item,
        isAggregate: chemicalInventoryRecord.lineItems.length > 1,
        datesPurchased: chemicalInventoryRecord.lineItems.map(
          (item) => item.datePurchased
        ),
        amountOnHand:
          chemicalInventoryRecord.lineItems.length === 1
            ? chemicalInventoryRecord.lineItems[0]!.amountRemaining
            : chemicalInventoryRecord.lineItems.slice(1).reduce(
                (agg, lineItem) => ({
                  ...agg,
                  value: agg.value + lineItem.amountRemaining.value,
                }),
                chemicalInventoryRecord.lineItems[0]!.amountRemaining
              ),
        subRows: chemicalInventoryRecord.lineItems.map((lineItem) => ({
          ...lineItem,
          chemical: chemicalInventoryRecord.item,
        })),
      })),
    [chemicalInventoryRecords]
  );

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<ChemicalTableRow>();
    return [
      columnHelper.accessor((row) => row.chemical.name, {
        id: 'name',
        header: 'Name',
        cell: (info) => upperFirst(info.getValue()),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.chemical.format, {
        id: 'format',
        header: 'Format',
        cell: (info) => upperFirst(info.getValue()),
        enableSorting: true,
      }),
      columnHelper.accessor((row) => row.amountOnHand, {
        id: 'amountOnHand',
        header: 'Amount On Hand',
        cell: (info) => {
          const amount = info.getValue();
          return `${amount.value} ${amount.unit}`;
        },
        enableSorting: false,
      }),
      columnHelper.accessor('datesPurchased', {
        id: 'datePurchased',
        header: 'Date Purchased',
        enableSorting: true,
        cell: (info) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
            }}
          >
            {info.getValue().map((datePurchased, index) => (
              <Box key={index}>{datePurchased.toLocaleDateString()}</Box>
            ))}
          </Box>
        ),
      }),
      columnHelper.display({
        id: 'expand',
        header: '',
        cell: ({ row }) => {
          if (!row.original.isAggregate) return null;
          return (
            <IconButton
              size="small"
              onClick={() => row.toggleExpanded()}
              sx={{ color: theme.palette.text.secondary }}
            >
              {row.getIsExpanded() ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} />
              )}
            </IconButton>
          );
        },
      }),
    ];
  }, [theme]);

  const table = useReactTable({
    data: chemicalTableRows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      globalFilter,
      sorting,
      expanded,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    enableSortingRemoval: false,
    autoResetAll: false,
  });

  return (
    <Box>
      <Widgets widgets={widgets} onToggleWidget={handleToggleWidget} />

      <Paper sx={{ borderRadius: 2, paddingY: 2, paddingX: 2, minHeight: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id}>
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <TableSortLabel
                          active={!!header.column.getIsSorted()}
                          direction={
                            header.column.getIsSorted() === 'desc'
                              ? 'desc'
                              : 'asc'
                          }
                          onClick={(event) => {
                            const handler =
                              header.column.getToggleSortingHandler();
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
              {table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  <TableRow>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>

                  {row.getIsExpanded() && row.original.subRows && (
                    <TableRow key={`${row.id}-expanded`}>
                      <TableCell
                        colSpan={columns.length}
                        sx={{
                          padding: 0,
                          backgroundColor: theme.palette.background.default,
                        }}
                      >
                        <Collapse in={row.getIsExpanded()} timeout="auto">
                          <Box sx={{ margin: 2 }}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: 600 }}>
                                    Amount Purchased
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: 600 }}>
                                    Amount Remaining
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: 600 }}>
                                    Date Purchased
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {row.original.subRows.map((subRow, index) => (
                                  <TableRow
                                    key={`${row.id}-subrow-${index}`}
                                    sx={{
                                      backgroundColor:
                                        getTableRowColorByDatePurchased(
                                          theme,
                                          subRow.datePurchased
                                        ),
                                    }}
                                  >
                                    <TableCell>
                                      {subRow.amountPurchased.value}{' '}
                                      {subRow.amountPurchased.unit}
                                    </TableCell>
                                    <TableCell>
                                      {subRow.amountRemaining.value}{' '}
                                      {subRow.amountRemaining.unit}
                                    </TableCell>
                                    <TableCell>
                                      {subRow.datePurchased.toLocaleDateString()}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
