import type { LineItem } from '../inventory.type';

export type FermentableFormat = 'malt' | 'extract' | 'sugar' | 'adjunct';

export interface Fermentable {
  id: string;
  name: string;
  format: FermentableFormat;
  gravityUnits: number;
}

export interface FermentableLineItem extends LineItem {
  fermentable: Fermentable;
}
