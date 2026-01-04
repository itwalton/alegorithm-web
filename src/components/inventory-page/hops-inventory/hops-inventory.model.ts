import type { LineItem } from "../inventory.type";

export type HopPurpose = "aroma" | "bittering";

export interface Hop {
  id: string;
  name: string;
  purpose: HopPurpose;
  dateHarvested?: Date;
}

export interface HopLineItem extends LineItem {
  hop: Hop;
}
