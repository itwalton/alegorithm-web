import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

function ChemicalsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: '#64b5f6' }}>
        Chemicals
      </Typography>
      <Typography variant="body1">
        Manage your brewing chemicals - additives, acids, sanitizers, and processing aids.
      </Typography>
    </Box>
  )
}

export const Route = createFileRoute('/inventory/materials')({
  component: ChemicalsPage,
})