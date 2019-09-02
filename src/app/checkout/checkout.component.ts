import { Component, OnInit } from '@angular/core';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartContent: CartProduct[];

  calculateTaxes = (product: CartProduct): {salesTax: number, importTax: number} => {
    const output = {salesTax: 0, importTax: 0};

    if (!product.isTaxExempt) {
      const rawSalesTax = parseFloat((product.price * 0.10).toFixed(2));
      const salesModulo = parseFloat((rawSalesTax % 0.05).toFixed(2));
      salesModulo === 0
        ? output.salesTax = rawSalesTax
        : output.salesTax = rawSalesTax + (0.05 - salesModulo);
    }

    if (product.isImported) {
      const rawImportTax = parseFloat((product.price * 0.05).toFixed(2));
      const importModulo = parseFloat((rawImportTax % 0.05).toFixed(2));
      importModulo === 0
        ? output.importTax = rawImportTax
        : output.importTax = rawImportTax + (0.05 - importModulo);
    }
    return output;
  }

  calculateProductTotal = (product) => {
    const taxes = this.calculateTaxes(product);
    return (product.price * product.qty) + (taxes.salesTax * product.qty) + (taxes.importTax * product.qty);
  }

  calculateGrandTotal() {
    let total = 0;
    this.cartContent.forEach(product => {
      total += this.calculateProductTotal(product);
    });
    return total;
  }

  parsePrice = (price: number): string => {
    const priceString = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${priceString}`;
  }

  confirmPurchase = () => {
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }

  constructor(private cartService: UserCartService, private router: Router) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }

}
