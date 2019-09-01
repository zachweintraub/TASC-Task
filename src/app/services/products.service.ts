import { Injectable } from '@angular/core';
import { InventoryProduct, Categories } from '../InventoryProduct';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: InventoryProduct[] = [
    {
      id: 0,
      name: 'Skittles (1 bag, 16 lbs.)',
      price: 16.00,
      categories: [Categories.food, Categories.candy],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 1,
      name: 'Walkman',
      price: 99.00,
      categories: [Categories.electronics],
      isImported: false,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 2,
      name: 'Microwave Popcorn (1 bag)',
      price: 0.99,
      categories: [Categories.food],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 3,
      name: 'Vanilla Hazlenut Coffee (Imported)',
      price: 11.00,
      categories: [Categories.food, Categories.foreignGoods],
      isImported: true,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 4,
      name: 'Vespa (Imported)',
      price: 15001.25,
      categories: [Categories.transportation, Categories.foreignGoods],
      isImported: true,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 5,
      name: 'Almond Snickers (1 crate, imported)',
      price: 75.99,
      categories: [Categories.food, Categories.candy, Categories.foreignGoods],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
    {
      id: 6,
      name: 'Discman',
      price: 55.00,
      categories: [Categories.electronics],
      isImported: false,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 7,
      name: 'Wine (1 bottle, imported)',
      price: 10.00,
      categories: [Categories.food, Categories.foreignGoods],
      isImported: true,
      isTaxExempt: false,
      inventoryQty: 99,
    },
    {
      id: 8,
      name: 'Fair Trade Coffee (1 bag, 300 lbs.)',
      price: 997.99,
      categories: [Categories.food],
      isImported: false,
      isTaxExempt: true,
      inventoryQty: 99,
    },
  ];

  getProducts = () => {
    return of(this.products);
  }

  findProduct = (id: number) => {
    return this.products.find(obj => obj.id === id);
  }

  decrementQty = (id: number, qty: number) => {
    this.products.find(obj => obj.id === id).inventoryQty -= qty;
  }

  incrementQty = (id: number, qty: number) => {
    this.products.find(obj => obj.id === id).inventoryQty += qty;
  }

}
