import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function ChemicalsInventoryPage() {
  const theme = useTheme()

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.info.main }}>
        Chemicals
      </Typography>
      <Typography variant="body1">
        Manage your brewing chemicals - additives, acids, sanitizers, and processing aids.
      </Typography>
    </Box>
  )
}
