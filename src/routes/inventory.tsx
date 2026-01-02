import { createFileRoute, Outlet } from '@tanstack/react-router'

function InventoryPage() {
  return <Outlet />
}

export const Route = createFileRoute('/inventory')({
  component: InventoryPage,
})