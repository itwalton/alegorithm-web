import type { ChemicalInventoryRecord } from './chemical-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type ChemicalInventoryResponse = Response<ChemicalInventoryRecord[]>;

export default function useGetChemicalInventoryRecord(): ChemicalInventoryResponse {
  return {
    data: [
      {
        item: {
          id: 'C001',
          name: 'Irish Moss',
          format: 'dry',
        },
        lineItems: [
          {
            id: 'CL001',
            datePurchased: new Date('2025-11-10'), // Recent
            amount: { value: 0.5, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'C002',
          name: 'Phosphoric Acid',
          format: 'wet',
        },
        lineItems: [
          {
            id: 'CL002',
            datePurchased: new Date('2024-05-15'), // >12 months - RED
            amount: { value: 16, unit: 'fl oz' },
          },
        ],
      },
      {
        item: {
          id: 'C003',
          name: 'Gypsum',
          format: 'dry',
        },
        lineItems: [
          {
            id: 'CL003',
            datePurchased: new Date('2026-01-02'), // Recent
            amount: { value: 1, unit: 'lb' },
          },
          {
            id: 'CL004',
            datePurchased: new Date('2024-08-15'), // >12 months - RED
            amount: { value: 0.5, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'C004',
          name: 'Calcium Chloride',
          format: 'dry',
        },
        lineItems: [
          {
            id: 'CL005',
            datePurchased: new Date('2025-06-05'), // >6 months - YELLOW
            amount: { value: 0.75, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'C005',
          name: 'Lactic Acid',
          format: 'wet',
        },
        lineItems: [
          {
            id: 'CL006',
            datePurchased: new Date('2024-02-20'), // >12 months - RED
            amount: { value: 8, unit: 'fl oz' },
          },
        ],
      },
      {
        item: {
          id: 'C006',
          name: 'Campden Tablets',
          format: 'dry',
        },
        lineItems: [
          {
            id: 'CL007',
            datePurchased: new Date('2025-09-18'), // Recent
            amount: { value: 50, unit: 'tablet' },
          },
        ],
      },
      {
        item: {
          id: 'C007',
          name: 'Yeast Nutrient',
          format: 'dry',
        },
        lineItems: [
          {
            id: 'CL008',
            datePurchased: new Date('2025-04-25'), // >6 months - YELLOW
            amount: { value: 0.5, unit: 'lb' },
          },
        ],
      },
      {
        item: {
          id: 'C008',
          name: 'Whirlfloc',
          format: 'dry',
        },
        lineItems: [
          {
            id: 'CL009',
            datePurchased: new Date('2024-08-10'), // >12 months - RED
            amount: { value: 20, unit: 'tablet' },
          },
        ],
      },
    ],
    isLoading: false,
    error: null,
  };
}
