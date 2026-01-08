import type { HopLineItem } from './hops-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type HopInventoryResponse = Response<HopLineItem[]>;

export default function useGetHopsInventory(): HopInventoryResponse {
  return {
    data: [
      {
        id: '1',
        datePurchased: new Date('2024-01-20'),
        hop: {
          id: 'H001',
          name: 'Cascade',
          purpose: 'aroma',
          dateHarvested: new Date('2023-09-15'),
        },
      },
      {
        id: '2',
        datePurchased: new Date('2024-02-10'),
        hop: {
          id: 'H002',
          name: 'Centennial',
          purpose: 'bittering',
          dateHarvested: new Date('2023-09-20'),
        },
      },
      {
        id: '3',
        datePurchased: new Date('2024-03-05'),
        hop: {
          id: 'H003',
          name: 'Citra',
          purpose: 'aroma',
        },
      },
    ],
    isLoading: false,
    error: null,
  };
}
