import { createFileRoute } from '@tanstack/react-router'
import InventoryPage from '../../components/inventory/Inventory.page'

export const Route = createFileRoute('/inventory/')({
  component: InventoryPage,
})