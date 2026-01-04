import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts'
import { Box, Typography, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const data = [
  { month: 'Jan', '2-Row Pale': 45, 'Munich': 25, 'Wheat': 15, 'Crystal 60': 8 },
  { month: 'Feb', '2-Row Pale': 38, 'Munich': 22, 'Wheat': 12, 'Crystal 60': 6 },
  { month: 'Mar', '2-Row Pale': 42, 'Munich': 28, 'Wheat': 18, 'Crystal 60': 10 },
  { month: 'Apr', '2-Row Pale': 35, 'Munich': 20, 'Wheat': 14, 'Crystal 60': 7 },
  { month: 'May', '2-Row Pale': 48, 'Munich': 30, 'Wheat': 20, 'Crystal 60': 12 },
  { month: 'Jun', '2-Row Pale': 40, 'Munich': 25, 'Wheat': 16, 'Crystal 60': 8 },
]

const repurchaseLimit = 20 // lbs

export default function FermentablesChart() {
  const theme = useTheme()

  return (
    <Paper sx={{ p: 2, backgroundColor: theme.palette.background.paper, height: '100%' }}>
      <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '0.875rem' }}>
        Fermentables (lbs)
      </Typography>
      <Box sx={{ height: 250, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis
              dataKey="month"
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            />
            <YAxis
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              label={{ value: 'Pounds', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: theme.palette.text.secondary } }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '6px',
                color: theme.palette.text.primary
              }}
            />
            <Legend
              wrapperStyle={{ color: theme.palette.text.secondary }}
            />
            <ReferenceLine
              y={repurchaseLimit}
              stroke={theme.palette.error.main}
              strokeDasharray="5 5"
              label={{ value: "Repurchase Limit", position: "insideTopRight", style: { fill: theme.palette.error.main, fontSize: 12 } }}
            />
            <Line type="monotone" dataKey="2-Row Pale" stroke={theme.palette.secondary.main} strokeWidth={2} dot={{ fill: theme.palette.secondary.main }} />
            <Line type="monotone" dataKey="Munich" stroke={theme.palette.primary.main} strokeWidth={2} dot={{ fill: theme.palette.primary.main }} />
            <Line type="monotone" dataKey="Wheat" stroke={theme.palette.info.main} strokeWidth={2} dot={{ fill: theme.palette.info.main }} />
            <Line type="monotone" dataKey="Crystal 60" stroke={theme.palette.error.main} strokeWidth={2} dot={{ fill: theme.palette.error.main }} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}