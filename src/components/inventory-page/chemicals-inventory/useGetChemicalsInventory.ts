import type { ChemicalLineItem } from './chemicals-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type ChemicalInventoryResponse = Response<ChemicalLineItem[]>;

export default function useGetChemicalsInventory(): ChemicalInventoryResponse {
  return {
    data: [
      {
        id: '1',
        datePurchased: new Date('2024-01-10'),
        chemical: {
          id: 'C001',
          name: 'Irish Moss',
          format: 'dry',
          quantity: 100,
        },
      },
      {
        id: '2',
        datePurchased: new Date('2024-02-15'),
        chemical: {
          id: 'C002',
          name: 'Phosphoric Acid',
          format: 'wet',
          volume: 500,
        },
      },
      {
        id: '3',
        datePurchased: new Date('2024-03-01'),
        chemical: {
          id: 'C003',
          name: 'Gypsum',
          format: 'dry',
          quantity: 250,
        },
      },
    ],
    isLoading: false,
    error: null,
  };
}
