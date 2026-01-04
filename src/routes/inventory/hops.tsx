import { createFileRoute } from '@tanstack/react-router';
import HopsInventoryPage from '../../components/inventory-page/hops-inventory/HopsInventory.page';

export const Route = createFileRoute('/inventory/hops')({
  component: HopsInventoryPage,
});
