import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const data = [
  { name: 'Citra', value: 35, color: '#00ff41' },
  { name: 'Mosaic', value: 28, color: '#ffff00' },
  { name: 'Amarillo', value: 20, color: '#64b5f6' },
  { name: 'Centennial', value: 12, color: '#ff6b6b' },
  { name: 'Cascade', value: 5, color: '#90caf9' },
];

export default function AromaHopsDonutChart() {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '6px',
            p: 1,
            color: theme.palette.text.primary,
          }}
        >
          <Typography variant="body2">
            {`${payload[0].name}: ${payload[0].value}%`}
          </Typography>
        </Box>
      );
    }
    return null;
  };

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
        sx={{ color: theme.palette.primary.main, fontSize: '0.875rem' }}
      >
        Aroma Hops Usage
      </Typography>
      <Box sx={{ height: 250, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                color: theme.palette.text.secondary,
                fontSize: '12px',
              }}
              formatter={(value: string, entry: any) => (
                <span style={{ color: entry.color }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
