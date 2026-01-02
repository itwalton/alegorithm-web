import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

function HopsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: '#00ff41' }}>
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