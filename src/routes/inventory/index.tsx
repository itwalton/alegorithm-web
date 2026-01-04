import { createFileRoute } from '@tanstack/react-router'
import InventoryPage from '../../components/inventory-page/Inventory.page'

export const Route = createFileRoute('/inventory/')({
  component: InventoryPage,
})