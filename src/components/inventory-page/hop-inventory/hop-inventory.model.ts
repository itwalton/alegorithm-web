import type { InventoryRecord } from '../inventory.type';

export type HopUsage = 'aroma' | 'bittering';

export interface Hop {
  id: string;
  name: string;
  usage: HopUsage[];
}

export type HopInventoryRecord = InventoryRecord<Hop>;
