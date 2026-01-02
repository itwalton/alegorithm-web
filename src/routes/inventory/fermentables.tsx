import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function FermentablesPage() {
  const theme = useTheme()

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.secondary.main }}>
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