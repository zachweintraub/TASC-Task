import { Injectable } from '@angular/core';
import { IProduct, CategoriesEnum } from '../types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  products: IProduct[] = [
    {
      id: 0,
      name: 'Skittles (1 bag, 16 lbs.)',
      price: 16.00,
      categories: [CategoriesEnum.food, CategoriesEnum.candy],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 1,
      name: 'Walkman',
      price: 99.00,
      categories: [CategoriesEnum.electronics],
      isImported: false,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 2,
      name: 'Microwave Popcorn (1 bag)',
      price: 0.99,
      categories: [CategoriesEnum.food],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 3,
      name: 'Vanilla Hazlenut Coffee (Imported)',
      price: 11.00,
      categories: [CategoriesEnum.food, CategoriesEnum.foreignGoods],
      isImported: true,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 4,
      name: 'Vespa (Imported)',
      price: 15001.25,
      categories: [CategoriesEnum.transportation, CategoriesEnum.foreignGoods],
      isImported: true,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 5,
      name: 'Almond Snickers (1 crate, imported)',
      price: 75.99,
      categories: [CategoriesEnum.food, CategoriesEnum.candy, CategoriesEnum.foreignGoods],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 6,
      name: 'Discman',
      price: 55.00,
      categories: [CategoriesEnum.electronics],
      isImported: false,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 7,
      name: 'Wine (1 bottle, imported)',
      price: 10.00,
      categories: [CategoriesEnum.food, CategoriesEnum.foreignGoods],
      isImported: true,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 8,
      name: 'Fair Trade Coffee (1 bag, 300 lbs.)',
      price: 997.99,
      categories: [CategoriesEnum.food],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
  ];

  getProducts = () => {
    return of(this.products);
  }

  decrementQty = (id: number, qty: number) => {
    const targetIndex = this.products.indexOf(this.products.find(obj => obj.id === id));
    this.products[targetIndex].inventoryQty -= qty;
  }

}
