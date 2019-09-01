import { Injectable } from '@angular/core';
import { Product } from '../types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  products: Product[] = [
    {
      id: 0,
      name: 'test',
      price: 1,
      categories: [],
      isImported: false,
      isTaxExempt: false,
      inventoryQty: 99,
    }
  ];

  getProducts = () => {
    return of(this.products);
  }

  decrementQty = (id: number, qty: number) => {
    const targetIndex = this.products.indexOf(this.products.find(obj => obj.id === id));
    this.products[targetIndex].inventoryQty -= qty;
  }

}
