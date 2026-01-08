import type { Theme } from '@mui/material';

export const getTableRowColorByDatePurchased = (
  theme: Theme,
  datePurchased: Date
) => {
  const now = new Date();
  const monthsDiff =
    (now.getTime() - datePurchased.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (monthsDiff > 12) {
    return `${theme.palette.error.main}15`; // Red hue with 15% opacity
  } else if (monthsDiff > 6) {
    return `${theme.palette.secondary.main}15`; // Yellow hue with 15% opacity
  }
  return 'transparent';
};
