export interface LineItem {
  id: string;
  datePurchased: Date;
  amount: {
    value: number;
    unit: string;
  };
}

export interface InventoryRecord<T> {
  item: T;
  lineItems: LineItem[];
}
