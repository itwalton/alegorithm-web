import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useGetYeastInventoryRecords from '../useGetYeastInventoryRecords';

export default function YeastFormatBarChart() {
  const theme = useTheme();
  const { data: yeastInventoryRecords } = useGetYeastInventoryRecords();

  // Count line items by format
  const formatCounts = yeastInventoryRecords.reduce(
    (acc, record) => {
      const format = record.item.format;
      const lineItemCount = record.lineItems.length;

      if (format === 'wet') {
        acc.wet += lineItemCount;
      } else if (format === 'dry') {
        acc.dry += lineItemCount;
      }

      return acc;
    },
    { wet: 0, dry: 0 }
  );

  const data = [
    {
      name: 'Wet',
      count: formatCounts.wet,
      fill: theme.palette.info.main,
    },
    {
      name: 'Dry',
      count: formatCounts.dry,
      fill: theme.palette.warning.main,
    },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ color: theme.palette.warning.main, fontSize: '0.875rem' }}
      >
        Yeast Format Distribution
      </Typography>
      <Box sx={{ height: 250, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme.palette.divider}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            />
            <YAxis
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              label={{
                value: 'Line Items',
                angle: -90,
                position: 'insideLeft',
                style: {
                  textAnchor: 'middle',
                  fill: theme.palette.text.secondary,
                },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '6px',
                color: theme.palette.text.primary,
              }}
            />
            <Bar
              dataKey="count"
              fill={theme.palette.warning.main}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
