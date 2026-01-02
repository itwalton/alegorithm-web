import { createFileRoute } from '@tanstack/react-router'
import InventoryPage from '../components/Inventory/Inventory.page'

export const Route = createFileRoute('/inventory')({
  component: InventoryPage,
})