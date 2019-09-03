import { TestBed } from '@angular/core/testing';

import { UserCartService } from './user-cart.service';

describe('UserCartService', () => {
  let cartService: UserCartService;
  let userCart;
  const newProduct = {
    id: 1,
    name: 'Walkman',
    price: 99.00,
    isImported: false,
    isTaxExempt: false,
    qty: 1,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    cartService = new UserCartService();
    cartService.getCart().subscribe(res => {
      userCart = res;
    });
  });

  it('should be created', () => {
    const service: UserCartService = TestBed.get(UserCartService);
    expect(service).toBeTruthy();
  });

  it('should fetch empty user cart', () => {
    const expectedCart = [];
    expect(expectedCart).toEqual(userCart);
  });

  it('should clear cart successfully', () => {
    cartService.addProduct(newProduct);
    cartService.addProduct(newProduct);
    cartService.clearCart();
    expect(userCart).toEqual([]);
  });

  it('should add new product to cart', () => {
    cartService.addProduct(newProduct);
    expect(userCart).toContain(newProduct);
  });

  it('should remove products from the cart', () => {
    cartService.addProduct(newProduct);
    cartService.removeProduct(newProduct.id);
    expect(userCart.length).toEqual(0);
  });

  it('should return a single product using the find method', () => {
    cartService.addProduct(newProduct);
    const foundProduct = cartService.find(1);
    expect(newProduct).toEqual(foundProduct);
  });
});
