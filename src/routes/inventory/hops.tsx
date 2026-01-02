import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function HopsPage() {
  const theme = useTheme()

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
        Hops
      </Typography>
      <Typography variant="body1">
        Manage your hop varieties for brewing - bittering, flavor, and aroma hops.
      </Typography>
    </Box>
  )
}

export const Route = createFileRoute('/inventory/hops')({
  component: HopsPage,
})