export interface Product {
  id: number;
  name: string;
  price: number;
  categories: string[];
  isImported: boolean;
  isTaxExempt: boolean;
  inventoryQty: number;
}