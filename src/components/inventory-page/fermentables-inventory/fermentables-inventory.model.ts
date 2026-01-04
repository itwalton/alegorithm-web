import type { LineItem } from '../inventory.type';

export type FermentableType = 'malt extract' | 'sugar';

export interface Fermentable {
  id: string;
  type: FermentableType;
}

export interface FermentableLineItem extends LineItem {
  fermentable: Fermentable;
}
