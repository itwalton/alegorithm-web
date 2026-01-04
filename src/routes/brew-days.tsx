import { createFileRoute } from '@tanstack/react-router';

import BrewDaysPage from '../components/brew-days/BrewDays.page';

export const Route = createFileRoute('/brew-days')({
  component: BrewDaysPage,
});
