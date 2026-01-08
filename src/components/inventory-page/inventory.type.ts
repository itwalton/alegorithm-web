export interface LineItem {
  id: string;
  datePurchased: Date;
  amount: {
    value: number;
    unit: string;
  };
}
