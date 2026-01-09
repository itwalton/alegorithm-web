import { createFileRoute } from '@tanstack/react-router';

import BatchTrakPage from '../components/batchtrak/BatchTrak.page';

export const Route = createFileRoute('/batchtrak')({
  component: BatchTrakPage,
});
