import { Component, OnInit } from '@angular/core';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartContent: CartProduct[];

  constructor(private cartService: UserCartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }

}
