import { Component, OnInit } from '@angular/core';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartContent: CartProduct[];

  // method to call when user clicks the "remove" button
  onRemoveFromCart = (id: number, qty: number) => {
    // remove the product from the cart
    this.cartService.removeProduct(id);
    // adjust the inventory level of the product
    this.productsService.incrementQty(id, qty);
  }

  constructor(private productsService: ProductsService, private cartService: UserCartService) { }

  ngOnInit() {
    // fetch cart contents to display
    this.cartService.getCart().subscribe(res => this.cartContent = res);
  }

}
