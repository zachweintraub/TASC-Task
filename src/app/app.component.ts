import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { UserCartService } from './services/user-cart.service';
import { InventoryProduct } from './InventoryProduct';
import { CartProduct } from './CartProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TASC Market';

  cartContent: CartProduct[];

  constructor(private cartService: UserCartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }
}
