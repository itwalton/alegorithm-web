import type { YeastInventoryRecord } from './yeast-inventory.model';

type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

type YeastInventoryResponse = Response<YeastInventoryRecord[]>;

export default function useGetYeastInventoryRecords(): YeastInventoryResponse {
  return {
    data: [
      {
        item: {
          id: 'Y001',
          name: 'US-05 American Ale',
          format: 'dry',
          manufacturer: 'fermentis',
          dateProduced: new Date('2025-11-15'),
        },
        lineItems: [
          {
            id: 'L001',
            datePurchased: new Date('2025-12-01'),
            amount: { value: 11.5, unit: 'g' },
          },
          {
            id: 'L002',
            datePurchased: new Date('2025-11-20'),
            amount: { value: 11.5, unit: 'g' },
          },
        ],
      },
      {
        item: {
          id: 'Y002',
          name: 'Wyeast 1056 American Ale',
          format: 'wet',
          manufacturer: 'wyeast',
          dateProduced: new Date('2025-10-10'),
        },
        lineItems: [
          {
            id: 'L003',
            datePurchased: new Date('2025-10-25'),
            amount: { value: 125, unit: 'ml' },
          },
        ],
      },
      {
        item: {
          id: 'Y003',
          name: 'WLP001 California Ale',
          format: 'wet',
          manufacturer: 'white_labs',
          dateProduced: new Date('2025-09-20'),
        },
        lineItems: [
          {
            id: 'L004',
            datePurchased: new Date('2025-10-01'),
            amount: { value: 35, unit: 'ml' },
          },
        ],
      },
      {
        item: {
          id: 'Y004',
          name: 'SafAle S-04 English Ale',
          format: 'dry',
          manufacturer: 'fermentis',
          dateProduced: new Date('2025-08-15'),
        },
        lineItems: [
          {
            id: 'L005',
            datePurchased: new Date('2025-09-10'),
            amount: { value: 11.5, unit: 'g' },
          },
        ],
      },
      {
        item: {
          id: 'Y005',
          name: 'Wyeast 3711 French Saison',
          format: 'wet',
          manufacturer: 'wyeast',
          dateProduced: new Date('2025-07-05'),
        },
        lineItems: [
          {
            id: 'L006',
            datePurchased: new Date('2025-07-20'),
            amount: { value: 125, unit: 'ml' },
          },
        ],
      },
      {
        item: {
          id: 'Y006',
          name: 'WLP830 German Lager',
          format: 'wet',
          manufacturer: 'white_labs',
          dateProduced: new Date('2024-12-10'),
        },
        lineItems: [
          {
            id: 'L007',
            datePurchased: new Date('2025-01-05'),
            amount: { value: 35, unit: 'ml' },
          },
        ],
      },
      {
        item: {
          id: 'Y007',
          name: 'SafLager W-34/70',
          format: 'dry',
          manufacturer: 'fermentis',
          dateProduced: new Date('2025-06-20'),
        },
        lineItems: [
          {
            id: 'L008',
            datePurchased: new Date('2025-07-01'),
            amount: { value: 11.5, unit: 'g' },
          },
        ],
      },
      {
        item: {
          id: 'Y008',
          name: 'Wyeast 2565 Kolsch',
          format: 'wet',
          manufacturer: 'wyeast',
          dateProduced: new Date('2025-05-15'),
        },
        lineItems: [
          {
            id: 'L009',
            datePurchased: new Date('2025-06-01'),
            amount: { value: 125, unit: 'ml' },
          },
        ],
      },
    ],
    isLoading: false,
    error: null,
  };
}
