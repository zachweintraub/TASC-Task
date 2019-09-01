export class Product {
  id: number;
  name: string;
  price: number;
  categories: string[];
  isImported: boolean;
  isTaxExempt: boolean;
  inventoryQty: number;
}

export const Categories = {
  foreignGoods: 'Foreign Goods',
  food: 'Food',
  candy: 'Candy',
  transportation: 'Transportation',
  electronics: 'Electronics',
};
