import { createFileRoute } from '@tanstack/react-router';

import OverviewPage from '../components/overview/Overview.page';

export const Route = createFileRoute('/')({
  component: OverviewPage,
});
