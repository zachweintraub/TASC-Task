import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

import { Categories } from '../InventoryProduct';

describe('ProductServiceService', () => {
  let productService: ProductsService;
  let fetchedProducts;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    productService = new ProductsService();
    productService.getProducts().subscribe(res => fetchedProducts = res);
  });

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('should be able to fetch array of products', () => {
    const expectedProducts = [
      {
        id: 0,
        name: 'Skittles (1 bag, 16 lbs.)',
        price: 16.00,
        categories: [Categories.food, Categories.candy],
        isImported: false,
        isTaxExempt: true,
        inventoryQty: 5,
      },
      {
        id: 1,
        name: 'Walkman',
        price: 99.99,
        categories: [Categories.electronics],
        isImported: false,
        isTaxExempt: false,
        inventoryQty: 5,
      },
      {
        id: 2,
        name: 'Microwave Popcorn (1 bag)',
        price: 0.99,
        categories: [Categories.food],
        isImported: false,
        isTaxExempt: true,
        inventoryQty: 5,
      },
      {
        id: 3,
        name: 'Vanilla Hazlenut Coffee (Imported)',
        price: 11.00,
        categories: [Categories.food, Categories.foreignGoods],
        isImported: true,
        isTaxExempt: true,
        inventoryQty: 5,
      },
      {
        id: 4,
        name: 'Vespa (Imported)',
        price: 15001.25,
        categories: [Categories.transportation, Categories.foreignGoods],
        isImported: true,
        isTaxExempt: false,
        inventoryQty: 5,
      },
      {
        id: 5,
        name: 'Almond Snickers (1 crate, imported)',
        price: 75.99,
        categories: [Categories.food, Categories.candy, Categories.foreignGoods],
        isImported: true,
        isTaxExempt: true,
        inventoryQty: 5,
      },
      {
        id: 6,
        name: 'Discman',
        price: 55.00,
        categories: [Categories.electronics],
        isImported: false,
        isTaxExempt: false,
        inventoryQty: 5,
      },
      {
        id: 7,
        name: 'Wine (1 bottle, imported)',
        price: 10.00,
        categories: [Categories.food, Categories.foreignGoods],
        isImported: true,
        isTaxExempt: false,
        inventoryQty: 5,
      },
      {
        id: 8,
        name: 'Fair Trade Coffee (1 bag, 300 lbs.)',
        price: 997.99,
        categories: [Categories.food],
        isImported: false,
        isTaxExempt: true,
        inventoryQty: 5,
      },
    ];
    expect(expectedProducts).toEqual(fetchedProducts);
  });

  it('should return a single product using the findProuct method', () => {
    const foundProduct = productService.findProduct(1);
    const expectedProduct = {
      id: 1,
      name: 'Walkman',
      price: 99.99,
      categories: [Categories.electronics],
      isImported: false,
      isTaxExempt: false,
      inventoryQty: 5,
    };
    expect(expectedProduct).toEqual(foundProduct);
  });

  it('should properly decrement an items quantity', () => {
    productService.decrementQty(1, 1);
    const expectedQty = 4;
    const fetchedQty = productService.findProduct(1).inventoryQty;
    expect (expectedQty).toEqual(fetchedQty);
  });

  it('should properly increment an items quantity', () => {
    productService.incrementQty(1, 1);
    const expectedQty = 6;
    const fetchedQty = productService.findProduct(1).inventoryQty;
    expect (expectedQty).toEqual(fetchedQty);
  });
});
