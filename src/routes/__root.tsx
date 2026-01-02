import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@mui/material/styles'
import AppLayout from '../components/Layout/AppLayout'
import { theme } from '../theme/theme'

const RootLayout = () => (
  <ThemeProvider theme={theme}>
    <AppLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </AppLayout>
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })