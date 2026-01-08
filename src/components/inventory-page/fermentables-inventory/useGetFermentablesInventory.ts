import type { FermentableLineItem } from './fermentables-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type FermentablesInventoryResponse = Response<FermentableLineItem[]>;

export default function useGetFermentablesInventory(): FermentablesInventoryResponse {
  return {
    data: [
      {
        id: '1',
        datePurchased: new Date('2026-01-05'), // Recent - no color
        fermentable: {
          id: 'F001',
          name: 'Pale Ale Malt',
          format: 'malt',
          gravityUnits: 1.037,
        },
      },
      {
        id: '2',
        datePurchased: new Date('2024-12-20'), // >12 months - RED
        fermentable: {
          id: 'F002',
          name: 'Caramel 60L',
          format: 'malt',
          gravityUnits: 1.034,
        },
      },
      {
        id: '3',
        datePurchased: new Date('2025-12-05'), // Recent - no color
        fermentable: {
          id: 'F003',
          name: 'Light Malt Extract',
          format: 'extract',
          gravityUnits: 1.044,
        },
      },
      {
        id: '4',
        datePurchased: new Date('2024-03-25'), // >12 months - RED
        fermentable: {
          id: 'F004',
          name: 'Carapils',
          format: 'malt',
          gravityUnits: 1.033,
        },
      },
      {
        id: '5',
        datePurchased: new Date('2025-05-05'), // >6 months - YELLOW
        fermentable: {
          id: 'F005',
          name: 'Table Sugar',
          format: 'sugar',
          gravityUnits: 1.046,
        },
      },
      {
        id: '6',
        datePurchased: new Date('2024-06-12'), // >12 months - RED
        fermentable: {
          id: 'F006',
          name: 'Munich Malt',
          format: 'malt',
          gravityUnits: 1.037,
        },
      },
      {
        id: '7',
        datePurchased: new Date('2025-06-18'), // >6 months - YELLOW
        fermentable: {
          id: 'F007',
          name: 'Wheat Malt',
          format: 'malt',
          gravityUnits: 1.038,
        },
      },
      {
        id: '8',
        datePurchased: new Date('2025-11-22'), // Recent - no color
        fermentable: {
          id: 'F008',
          name: 'Flaked Oats',
          format: 'adjunct',
          gravityUnits: 1.033,
        },
      },
    ],
    isLoading: false,
    error: null,
  };
}
