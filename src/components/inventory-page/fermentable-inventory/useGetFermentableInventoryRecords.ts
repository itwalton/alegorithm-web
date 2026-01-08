import type { FermentableInventoryRecord } from './fermentable-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type FermentableInventoryResponse = Response<FermentableInventoryRecord[]>;

export default function useGetFermentableInventoryRecords(): FermentableInventoryResponse {
  return {
    data: [
      {
        item: {
          id: 'F001',
          name: 'Pale Ale Malt',
          type: 'malt',
          gravityUnits: 37,
        },
        lineItems: [
          {
            id: 'L001',
            datePurchased: new Date('2026-01-05'), // Recent
            amountPurchased: { value: 20, unit: 'lb' },
            amountRemaining: { value: 18, unit: 'lb' },
          },
          {
            id: 'L002',
            datePurchased: new Date('2024-12-20'), // >12 months - RED
            amountPurchased: { value: 10, unit: 'lb' },
            amountRemaining: { value: 7, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'F002',
          name: 'Caramel 60L',
          type: 'malt',
          gravityUnits: 34,
        },
        lineItems: [
          {
            id: 'L003',
            datePurchased: new Date('2024-12-20'), // >12 months - RED
            amountPurchased: { value: 5, unit: 'lb' },
            amountRemaining: { value: 4, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'F003',
          name: 'Light Malt Extract',
          type: 'extract',
          gravityUnits: 44,
        },
        lineItems: [
          {
            id: 'L004',
            datePurchased: new Date('2025-12-05'), // Recent
            amountPurchased: { value: 1, unit: 'gallon' },
            amountRemaining: { value: 0.8, unit: 'gallon' },
          },
        ],
      },
      {
        item: {
          id: 'F004',
          name: 'Carapils',
          type: 'malt',
          gravityUnits: 33,
        },
        lineItems: [
          {
            id: 'L005',
            datePurchased: new Date('2024-03-25'), // >12 months - RED
            amountPurchased: { value: 10, unit: 'lb' },
            amountRemaining: { value: 6, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'F005',
          name: 'Table Sugar',
          type: 'sugar',
          gravityUnits: 46,
        },
        lineItems: [
          {
            id: 'L006',
            datePurchased: new Date('2025-05-05'), // >6 months - YELLOW
            amountPurchased: { value: 2, unit: 'lb' },
            amountRemaining: { value: 1.5, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'F006',
          name: 'Munich Malt',
          type: 'malt',
          gravityUnits: 37,
        },
        lineItems: [
          {
            id: 'L007',
            datePurchased: new Date('2024-06-12'), // >12 months - RED
            amountPurchased: { value: 15, unit: 'lb' },
            amountRemaining: { value: 12, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'F007',
          name: 'Wheat Malt',
          type: 'malt',
          gravityUnits: 38,
        },
        lineItems: [
          {
            id: 'L008',
            datePurchased: new Date('2025-06-18'), // >6 months - YELLOW
            amountPurchased: { value: 8, unit: 'lb' },
            amountRemaining: { value: 7, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'F008',
          name: 'Flaked Oats',
          type: 'adjunct',
          gravityUnits: 33,
        },
        lineItems: [
          {
            id: 'L009',
            datePurchased: new Date('2025-11-22'), // Recent
            amountPurchased: { value: 3, unit: 'lb' },
            amountRemaining: { value: 3, unit: 'lb' },
          },
        ],
      },
    ],
    isLoading: false,
    error: null,
  };
}
