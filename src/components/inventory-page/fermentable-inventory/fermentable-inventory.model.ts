import type { InventoryRecord } from '../inventory.type';

export type FermentableType = 'malt' | 'extract' | 'sugar' | 'adjunct';

export interface Fermentable {
  id: string;
  name: string;
  type: FermentableType;
  gravityUnits: number;
}

export type FermentableInventoryRecord = InventoryRecord<Fermentable>;
