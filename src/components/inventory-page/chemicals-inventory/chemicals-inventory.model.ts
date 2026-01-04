import type { LineItem } from '../inventory.type';

export type ChemicalFormat = 'dry' | 'wet';

export interface Chemical {
  id: string;
  name: string;
  format: ChemicalFormat;
  quantity?: number;
  volume?: number;
}

export interface ChemicalLineItem extends LineItem {
  chemical: Chemical;
}
