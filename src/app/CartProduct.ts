export class CartProduct {

  constructor(id: number, name: string, price: number, isTaxExempt: boolean, isImported: boolean, qty: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isTaxExempt = isTaxExempt;
    this.isImported = isImported;
    this.qty = qty;
  }

  id: number;
  name: string;
  price: number;
  isTaxExempt: boolean;
  isImported: boolean;
  qty: number;
}
