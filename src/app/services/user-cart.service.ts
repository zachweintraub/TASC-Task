import { Injectable } from '@angular/core';
import { CartProduct } from '../CartProduct';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor() { }

  // array to contain all products as they are added to the cart
  cart: CartProduct[] = [];

  getCart = () => {
    return of(this.cart);
  }

  addProduct = (product: CartProduct) => {
    if (this.cart.find(obj => obj.id === product.id)) {
      // product exists in cart, simply update quantity
      this.cart.find(obj => obj.id === product.id).qty += product.qty;
    } else {
      // product does not exist in cart, add to cart
      this.cart.push(product);
    }
  }

  removeProduct = (id: number) => {
    // find the index of the product to delete in the cart array
    const targetIndex = this.cart.indexOf(this.cart.find(obj => obj.id === id));
    // use the splice method to remove the product at the found index
    this.cart.splice(targetIndex, 1);
  }

  find = (id: number) => {
    return this.cart.find(obj => obj.id === id);
  }

  // remove all products from the cart, called upon confirmation of purchase
  clearCart = () => {
    this.cart.length = 0;
  }
}
