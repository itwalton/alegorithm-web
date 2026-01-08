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
        datePurchased: new Date('2024-01-15'),
        fermentable: {
          id: 'F001',
          type: 'malt extract',
        },
      },
      {
        id: '2',
        datePurchased: new Date('2024-02-20'),
        fermentable: {
          id: 'F002',
          type: 'sugar',
        },
      },
      {
        id: '3',
        datePurchased: new Date('2024-03-10'),
        fermentable: {
          id: 'F003',
          type: 'malt extract',
        },
      },
    ],
    isLoading: false,
    error: null,
  };
}
