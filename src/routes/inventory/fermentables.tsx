import { createFileRoute } from '@tanstack/react-router';
import FermentablesInventoryPage from '../../components/inventory-page/fermentables-inventory/FermentablesInventory.page';

export const Route = createFileRoute('/inventory/fermentables')({
  component: FermentablesInventoryPage,
});
