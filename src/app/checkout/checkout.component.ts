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

  // returns an object containing the sales and import tax of a given product
  calculateTaxes = (product: CartProduct): {salesTax: number, importTax: number} => {

    // set the initial values as 0
    const output = {salesTax: 0, importTax: 0};

    // calculate sales tax if the product is not tax exempt
    if (!product.isTaxExempt) {
      const rawSalesTax = parseFloat((product.price * 0.10).toFixed(2));
      // round up to the nearest 0.05
      const salesModulo = parseFloat((rawSalesTax % 0.05).toFixed(2));
      salesModulo === 0
        ? output.salesTax = rawSalesTax
        : output.salesTax = rawSalesTax + (0.05 - salesModulo);
    }

    // calculate import tax if the product is imported
    if (product.isImported) {
      const rawImportTax = parseFloat((product.price * 0.05).toFixed(2));
      // round up to the nearest 0.05
      const importModulo = parseFloat((rawImportTax % 0.05).toFixed(2));
      importModulo === 0
        ? output.importTax = rawImportTax
        : output.importTax = rawImportTax + (0.05 - importModulo);
    }
    return output;
  }

  // uses the object returned by the calculateTaxes method to add the taxes to the price, accounting for quantity
  calculateProductTotal = (product) => {
    const taxes = this.calculateTaxes(product);
    return (product.price * product.qty) + (taxes.salesTax * product.qty) + (taxes.importTax * product.qty);
  }

  // calls calcluateProductTotal for every product in the cart and adds the values
  calculateGrandTotal() {
    let total = 0;
    this.cartContent.forEach(product => {
      total += this.calculateProductTotal(product);
    });
    return total;
  }

  // formats dollar amounts to display with the leading dollar symbol and commas where appropriate
  parsePrice = (price: number): string => {
    const priceString = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${priceString}`;
  }

  // removes all products from the cart and navigates back to the products list
  confirmPurchase = () => {
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }

  constructor(private cartService: UserCartService, private router: Router) { }

  // fetch the contents of the cart to display
  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }

}
