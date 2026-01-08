export interface LineItem {
  id: string;
  datePurchased: Date;
  amountPurchased: Measurement;
  amountRemaining: Measurement;
}

export interface InventoryRecord<T> {
  item: T;
  lineItems: LineItem[];
}

export type Measurement = {
  value: number;
  unit: string;
};
