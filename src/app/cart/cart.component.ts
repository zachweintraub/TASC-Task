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

  onRemoveFromCart = (id: number, qty: number) => {
    this.cartService.removeProduct(id);
    this.productsService.incrementQty(id, qty);
  }

  constructor(private productsService: ProductsService, private cartService: UserCartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(res => this.cartContent = res);
  }

}
