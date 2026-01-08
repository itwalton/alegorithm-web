import type { LineItem } from '../inventory.type';

export type FermentableType = 'malt' | 'extract' | 'sugar' | 'adjunct';

export interface Fermentable {
  id: string;
  name: string;
  type: FermentableType;
  gravityUnits: number;
}

export interface FermentableLineItem extends LineItem {
  fermentable: Fermentable;
}
