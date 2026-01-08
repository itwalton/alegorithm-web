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
        },
        amount: { value: 0.5, unit: 'lb' },
      },
      {
        id: '2',
        datePurchased: new Date('2024-05-15'), // >12 months - RED
        chemical: {
          id: 'C002',
          name: 'Phosphoric Acid',
          format: 'wet',
        },
        amount: { value: 16, unit: 'fl oz' },
      },
      {
        id: '3',
        datePurchased: new Date('2026-01-02'), // Recent - no color
        chemical: {
          id: 'C003',
          name: 'Gypsum',
          format: 'dry',
        },
        amount: { value: 1, unit: 'lb' },
      },
      {
        id: '4',
        datePurchased: new Date('2025-06-05'), // >6 months - YELLOW
        chemical: {
          id: 'C004',
          name: 'Calcium Chloride',
          format: 'dry',
        },
        amount: { value: 0.75, unit: 'lb' },
      },
      {
        id: '5',
        datePurchased: new Date('2024-02-20'), // >12 months - RED
        chemical: {
          id: 'C005',
          name: 'Lactic Acid',
          format: 'wet',
        },
        amount: { value: 8, unit: 'fl oz' },
      },
      {
        id: '6',
        datePurchased: new Date('2025-09-18'), // Recent - no color
        chemical: {
          id: 'C006',
          name: 'Campden Tablets',
          format: 'dry',
        },
        amount: { value: 50, unit: 'tablet' },
      },
      {
        id: '7',
        datePurchased: new Date('2025-04-25'), // >6 months - YELLOW
        chemical: {
          id: 'C007',
          name: 'Yeast Nutrient',
          format: 'dry',
        },
        amount: { value: 0.5, unit: 'lb' },
      },
      {
        id: '8',
        datePurchased: new Date('2024-08-10'), // >12 months - RED
        chemical: {
          id: 'C008',
          name: 'Whirlfloc',
          format: 'dry',
        },
        amount: { value: 20, unit: 'tablet' },
      },
    ],
    isLoading: false,
    error: null,
  };
}
