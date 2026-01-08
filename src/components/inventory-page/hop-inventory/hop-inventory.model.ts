import type { LineItem } from '../inventory.type';

export type HopUsage = 'aroma' | 'bittering';

export interface Hop {
  id: string;
  name: string;
  usage: HopUsage[];
  dateHarvested?: Date;
}

export interface HopLineItem extends LineItem {
  hop: Hop;
}
