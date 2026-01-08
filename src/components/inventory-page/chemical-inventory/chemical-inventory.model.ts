import type { InventoryRecord } from '../inventory.type';

export type ChemicalFormat = 'dry' | 'wet';

export interface Chemical {
  id: string;
  name: string;
  format: ChemicalFormat;
}

export type ChemicalInventoryRecord = InventoryRecord<Chemical>;
