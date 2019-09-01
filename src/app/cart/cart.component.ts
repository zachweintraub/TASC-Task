import { Component, OnInit } from '@angular/core';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartContent: CartProduct[];

  constructor(private cartService: UserCartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(res => this.cartContent = res);
  }

}
