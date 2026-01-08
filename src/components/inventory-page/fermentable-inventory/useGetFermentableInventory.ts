import type { FermentableLineItem } from './fermentable-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type FermentableInventoryResponse = Response<FermentableLineItem[]>;

export default function useGetFermentableInventory(): FermentableInventoryResponse {
  return {
    data: [
      {
        id: '1',
        datePurchased: new Date('2026-01-05'), // Recent - no color
        fermentable: {
          id: 'F001',
          name: 'Pale Ale Malt',
          type: 'malt',
          gravityUnits: 1.037,
        },
        amount: { value: 20, unit: 'lb' },
      },
      {
        id: '2',
        datePurchased: new Date('2024-12-20'), // >12 months - RED
        fermentable: {
          id: 'F002',
          name: 'Caramel 60L',
          type: 'malt',
          gravityUnits: 1.034,
        },
        amount: { value: 5, unit: 'lb' },
      },
      {
        id: '3',
        datePurchased: new Date('2025-12-05'), // Recent - no color
        fermentable: {
          id: 'F003',
          name: 'Light Malt Extract',
          type: 'extract',
          gravityUnits: 1.044,
        },
        amount: { value: 1, unit: 'gallon' },
      },
      {
        id: '4',
        datePurchased: new Date('2024-03-25'), // >12 months - RED
        fermentable: {
          id: 'F004',
          name: 'Carapils',
          type: 'malt',
          gravityUnits: 1.033,
        },
        amount: { value: 10, unit: 'lb' },
      },
      {
        id: '5',
        datePurchased: new Date('2025-05-05'), // >6 months - YELLOW
        fermentable: {
          id: 'F005',
          name: 'Table Sugar',
          type: 'sugar',
          gravityUnits: 1.046,
        },
        amount: { value: 2, unit: 'lb' },
      },
      {
        id: '6',
        datePurchased: new Date('2024-06-12'), // >12 months - RED
        fermentable: {
          id: 'F006',
          name: 'Munich Malt',
          type: 'malt',
          gravityUnits: 1.037,
        },
        amount: { value: 15, unit: 'lb' },
      },
      {
        id: '7',
        datePurchased: new Date('2025-06-18'), // >6 months - YELLOW
        fermentable: {
          id: 'F007',
          name: 'Wheat Malt',
          type: 'malt',
          gravityUnits: 1.038,
        },
        amount: { value: 8, unit: 'lb' },
      },
      {
        id: '8',
        datePurchased: new Date('2025-11-22'), // Recent - no color
        fermentable: {
          id: 'F008',
          name: 'Flaked Oats',
          type: 'adjunct',
          gravityUnits: 1.033,
        },
        amount: { value: 3, unit: 'lb' },
      },
    ],
    isLoading: false,
    error: null,
  };
}
