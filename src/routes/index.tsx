import { createFileRoute } from '@tanstack/react-router';

import AnalyticsPage from '../components/analytics/Analytics.page';

export const Route = createFileRoute('/')({
  component: AnalyticsPage,
});
