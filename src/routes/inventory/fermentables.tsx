import { createFileRoute } from '@tanstack/react-router'
import FermentablesInventoryPage from '../../components/inventory/fermentables-inventory/FermentablesInventory.page'

export const Route = createFileRoute('/inventory/fermentables')({
  component: FermentablesInventoryPage,
})