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
          name: 'Cascade',
          purpose: 'aroma',
          dateHarvested: new Date('2025-09-15'),
        },
      },
      {
        id: '2',
        datePurchased: new Date('2024-06-10'), // >12 months - RED
        hop: {
          id: 'H002',
          name: 'Centennial',
          purpose: 'bittering',
          dateHarvested: new Date('2024-05-20'),
        },
      },
      {
        id: '3',
        datePurchased: new Date('2025-12-15'), // Recent - no color
        hop: {
          id: 'H003',
          name: 'Citra',
          purpose: 'aroma',
          dateHarvested: new Date('2025-09-01'),
        },
      },
      {
        id: '4',
        datePurchased: new Date('2025-05-20'), // >6 months - YELLOW
        hop: {
          id: 'H004',
          name: 'Mosaic',
          purpose: 'aroma',
          dateHarvested: new Date('2025-04-15'),
        },
      },
      {
        id: '5',
        datePurchased: new Date('2024-03-12'), // >12 months - RED
        hop: {
          id: 'H005',
          name: 'Simcoe',
          purpose: 'bittering',
          dateHarvested: new Date('2024-02-20'),
        },
      },
      {
        id: '6',
        datePurchased: new Date('2025-10-08'), // Recent - no color
        hop: {
          id: 'H006',
          name: 'Amarillo',
          purpose: 'aroma',
        },
      },
      {
        id: '7',
        datePurchased: new Date('2025-06-18'), // >6 months - YELLOW
        hop: {
          id: 'H007',
          name: 'Columbus',
          purpose: 'bittering',
          dateHarvested: new Date('2025-05-10'),
        },
      },
      {
        id: '8',
        datePurchased: new Date('2024-11-22'), // >12 months - RED
        hop: {
          id: 'H008',
          name: 'Saaz',
          purpose: 'aroma',
          dateHarvested: new Date('2024-10-15'),
        },
      },
    ],
    isLoading: false,
    error: null,
  };
}
