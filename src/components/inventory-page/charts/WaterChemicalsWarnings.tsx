import { Alert, Paper, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MdScience } from 'react-icons/md';

const missingChemicals = [
  {
    name: 'Epsom Salt (MgSO4)',
    severity: 'warning',
    message: 'Low stock - 2 lbs remaining',
  },
  {
    name: 'Chalk (CaCO3)',
    severity: 'error',
    message: 'Out of stock - needed for next brew',
  },
  {
    name: 'Sodium Bicarbonate',
    severity: 'warning',
    message: 'Below minimum threshold',
  },
  {
    name: 'Calcium Chloride',
    severity: 'info',
    message: 'Consider restocking soon',
  },
  {
    name: 'Lactic Acid',
    severity: 'error',
    message: 'Critical - 0.5L remaining',
  },
];

export default function WaterChemicalsWarnings() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
        <MdScience
          style={{
            color: theme.palette.info.main,
            marginRight: 6,
            fontSize: 18,
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.info.main, fontSize: '0.875rem' }}
        >
          Chemical Alerts
        </Typography>
      </Box>
      <Stack spacing={1.5}>
        {missingChemicals.map((chemical, index) => (
          <Alert
            key={index}
            severity={
              chemical.severity as 'error' | 'warning' | 'info' | 'success'
            }
            variant="outlined"
            sx={{
              '& .MuiAlert-message': {
                color: theme.palette.text.primary,
              },
              backgroundColor: 'transparent',
              borderColor:
                chemical.severity === 'error'
                  ? theme.palette.error.main
                  : chemical.severity === 'warning'
                    ? theme.palette.secondary.main
                    : theme.palette.info.main,
              '& .MuiAlert-icon': {
                color:
                  chemical.severity === 'error'
                    ? theme.palette.error.main
                    : chemical.severity === 'warning'
                      ? theme.palette.secondary.main
                      : theme.palette.info.main,
              },
            }}
          >
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: 600 }}
            >
              {chemical.name}:
            </Typography>{' '}
            <Typography variant="body2" component="span">
              {chemical.message}
            </Typography>
          </Alert>
        ))}
      </Stack>
    </Paper>
  );
}
