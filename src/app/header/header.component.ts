import { Component, OnInit } from '@angular/core';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  cartContent: CartProduct[];

  // calculates the total number of products in the cart
  calculateCount = () => {
    let count = 0;
    this.cartContent.forEach(item => {
      count += item.qty;
    });
    return count;
  }

  constructor(private cartService: UserCartService) { }

  // fetch the cart contents in order to calculate number of products in the cart
  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }
}
