import type { InventoryRecord } from '../inventory.type';

export type YeastFormat = 'dry' | 'wet';

export type YeastManufacturer = 'wyeast' | 'white_labs' | 'fermentis';

export interface Yeast {
  id: string;
  name: string;
  format: YeastFormat;
  manufacturer: YeastManufacturer;
  dateProduced: Date;
}

export type YeastInventoryRecord = InventoryRecord<Yeast>;
