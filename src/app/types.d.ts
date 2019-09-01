export interface IProduct {
  id: number;
  name: string;
  price: number;
  categories: string[];
  isImported: boolean;
  isTaxExempt: boolean;
  inventoryQty: number;
}

export enum CategoriesEnum {
  foreignGoods = 'Foreign Goods',
  food = 'Food',
  candy = 'Candy',
  transportation = 'Transportation',
  electronics = 'Electronics',
}