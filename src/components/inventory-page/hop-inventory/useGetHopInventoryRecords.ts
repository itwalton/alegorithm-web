import type { HopInventoryRecord } from './hop-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type HopInventoryResponse = Response<HopInventoryRecord[]>;

export default function useGetHopInventoryRecords(): HopInventoryResponse {
  return {
    data: [
      {
        item: {
          id: 'H001',
          name: 'cascade',
          usage: ['aroma', 'bittering'],
        },
        lineItems: [
          {
            id: 'HL001',
            datePurchased: new Date('2026-01-05'), // Recent
            amount: { value: 16, unit: 'oz' },
          },
          {
            id: 'HL002',
            datePurchased: new Date('2025-05-15'), // >6 months - YELLOW
            amount: { value: 8, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H002',
          name: 'centennial',
          usage: ['bittering'],
        },
        lineItems: [
          {
            id: 'HL003',
            datePurchased: new Date('2024-06-10'), // >12 months - RED
            amount: { value: 8, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H003',
          name: 'citra',
          usage: ['aroma'],
        },
        lineItems: [
          {
            id: 'HL004',
            datePurchased: new Date('2025-12-15'), // Recent
            amount: { value: 12, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H004',
          name: 'mosaic',
          usage: ['aroma'],
        },
        lineItems: [
          {
            id: 'HL005',
            datePurchased: new Date('2025-05-20'), // >6 months - YELLOW
            amount: { value: 10, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H005',
          name: 'simcoe',
          usage: ['bittering'],
        },
        lineItems: [
          {
            id: 'HL006',
            datePurchased: new Date('2024-03-12'), // >12 months - RED
            amount: { value: 6, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H006',
          name: 'amarillo',
          usage: ['aroma'],
        },
        lineItems: [
          {
            id: 'HL007',
            datePurchased: new Date('2025-10-08'), // Recent
            amount: { value: 14, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H007',
          name: 'columbus',
          usage: ['bittering'],
        },
        lineItems: [
          {
            id: 'HL008',
            datePurchased: new Date('2025-06-18'), // >6 months - YELLOW
            amount: { value: 5, unit: 'oz' },
          },
        ],
      },
      {
        item: {
          id: 'H008',
          name: 'saaz',
          usage: ['aroma'],
        },
        lineItems: [
          {
            id: 'HL009',
            datePurchased: new Date('2024-11-22'), // >12 months - RED
            amount: { value: 8, unit: 'oz' },
          },
        ],
      },
    ],
    isLoading: false,
    error: null,
  };
}
