import { createFileRoute } from '@tanstack/react-router'
import ChemicalsInventoryPage from '../../components/inventory-page/chemicals-inventory/ChemicalsInventory.page'

export const Route = createFileRoute('/inventory/materials')({
  component: ChemicalsInventoryPage,
})