import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ChartData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

const data: ChartData[] = [
  { name: 'Citra', value: 35, color: '#00ff41' },
  { name: 'Mosaic', value: 28, color: '#ffff00' },
  { name: 'Amarillo', value: 20, color: '#64b5f6' },
  { name: 'Centennial', value: 12, color: '#ff6b6b' },
  { name: 'Cascade', value: 5, color: '#90caf9' },
];

export default function AromaHopsDonutChart() {
  const theme = useTheme();

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
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
