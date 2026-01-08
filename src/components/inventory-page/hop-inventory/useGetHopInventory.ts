import type { HopLineItem } from './hop-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type HopInventoryResponse = Response<HopLineItem[]>;

export default function useGetHopInventory(): HopInventoryResponse {
  return {
    data: [
      {
        id: '1',
        datePurchased: new Date('2026-01-05'), // Recent - no color
        hop: {
          id: 'H001',
          name: 'cascade',
          usage: ['aroma', 'bittering'],
          dateHarvested: new Date('2025-09-15'),
        },
        amount: { value: 16, unit: 'oz' },
      },
      {
        id: '2',
        datePurchased: new Date('2024-06-10'), // >12 months - RED
        hop: {
          id: 'H002',
          name: 'centennial',
          usage: ['bittering'],
          dateHarvested: new Date('2024-05-20'),
        },
        amount: { value: 8, unit: 'oz' },
      },
      {
        id: '3',
        datePurchased: new Date('2025-12-15'), // Recent - no color
        hop: {
          id: 'H003',
          name: 'citra',
          usage: ['aroma'],
          dateHarvested: new Date('2025-09-01'),
        },
        amount: { value: 12, unit: 'oz' },
      },
      {
        id: '4',
        datePurchased: new Date('2025-05-20'), // >6 months - YELLOW
        hop: {
          id: 'H004',
          name: 'mosaic',
          usage: ['aroma'],
          dateHarvested: new Date('2025-04-15'),
        },
        amount: { value: 10, unit: 'oz' },
      },
      {
        id: '5',
        datePurchased: new Date('2024-03-12'), // >12 months - RED
        hop: {
          id: 'H005',
          name: 'simcoe',
          usage: ['bittering'],
          dateHarvested: new Date('2024-02-20'),
        },
        amount: { value: 6, unit: 'oz' },
      },
      {
        id: '6',
        datePurchased: new Date('2025-10-08'), // Recent - no color
        hop: {
          id: 'H006',
          name: 'amarillo',
          usage: ['aroma'],
        },
        amount: { value: 14, unit: 'oz' },
      },
      {
        id: '7',
        datePurchased: new Date('2025-06-18'), // >6 months - YELLOW
        hop: {
          id: 'H007',
          name: 'columbus',
          usage: ['bittering'],
          dateHarvested: new Date('2025-05-10'),
        },
        amount: { value: 5, unit: 'oz' },
      },
      {
        id: '8',
        datePurchased: new Date('2024-11-22'), // >12 months - RED
        hop: {
          id: 'H008',
          name: 'saaz',
          usage: ['aroma'],
          dateHarvested: new Date('2024-10-15'),
        },
        amount: { value: 8, unit: 'oz' },
      },
    ],
    isLoading: false,
    error: null,
  };
}
