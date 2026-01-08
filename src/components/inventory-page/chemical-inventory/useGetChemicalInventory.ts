import type { ChemicalLineItem } from './chemical-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type ChemicalInventoryResponse = Response<ChemicalLineItem[]>;

export default function useGetChemicalInventory(): ChemicalInventoryResponse {
  return {
    data: [
      {
        id: '1',
        datePurchased: new Date('2025-11-10'), // Recent - no color
        chemical: {
          id: 'C001',
          name: 'Irish Moss',
          format: 'dry',
          quantity: 100,
        },
      },
      {
        id: '2',
        datePurchased: new Date('2024-05-15'), // >12 months - RED
        chemical: {
          id: 'C002',
          name: 'Phosphoric Acid',
          format: 'wet',
          volume: 500,
        },
      },
      {
        id: '3',
        datePurchased: new Date('2026-01-02'), // Recent - no color
        chemical: {
          id: 'C003',
          name: 'Gypsum',
          format: 'dry',
          quantity: 250,
        },
      },
      {
        id: '4',
        datePurchased: new Date('2025-06-05'), // >6 months - YELLOW
        chemical: {
          id: 'C004',
          name: 'Calcium Chloride',
          format: 'dry',
          quantity: 150,
        },
      },
      {
        id: '5',
        datePurchased: new Date('2024-02-20'), // >12 months - RED
        chemical: {
          id: 'C005',
          name: 'Lactic Acid',
          format: 'wet',
          volume: 250,
        },
      },
      {
        id: '6',
        datePurchased: new Date('2025-09-18'), // Recent - no color
        chemical: {
          id: 'C006',
          name: 'Campden Tablets',
          format: 'dry',
          quantity: 50,
        },
      },
      {
        id: '7',
        datePurchased: new Date('2025-04-25'), // >6 months - YELLOW
        chemical: {
          id: 'C007',
          name: 'Yeast Nutrient',
          format: 'dry',
          quantity: 200,
        },
      },
      {
        id: '8',
        datePurchased: new Date('2024-08-10'), // >12 months - RED
        chemical: {
          id: 'C008',
          name: 'Whirlfloc',
          format: 'dry',
          quantity: 75,
        },
      },
    ],
    isLoading: false,
    error: null,
  };
}
