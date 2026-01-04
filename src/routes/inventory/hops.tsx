import { createFileRoute } from '@tanstack/react-router'
import HopsInventoryPage from '../../components/inventory/hops-inventory/HopsInventory.page'

export const Route = createFileRoute('/inventory/hops')({
  component: HopsInventoryPage,
})