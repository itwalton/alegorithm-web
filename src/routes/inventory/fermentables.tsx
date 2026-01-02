import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

function FermentablesPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: '#ffff00' }}>
        Fermentables
      </Typography>
      <Typography variant="body1">
        Manage your brewing fermentables - malts, grains, and sugars.
      </Typography>
    </Box>
  )
}

export const Route = createFileRoute('/inventory/fermentables')({
  component: FermentablesPage,
})