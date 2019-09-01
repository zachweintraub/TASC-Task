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

  products: InventoryProduct[];

  cartContent: CartProduct[];

  onAddToCart = (product: InventoryProduct, qty: number) => {
    const newProduct = new CartProduct(
      product.id,
      product.name,
      product.price,
      product.isTaxExempt,
      product.isImported,
      qty
    );

    this.cartService.addProduct(newProduct);

    this.productsService.decrementQty(product.id, qty);

    console.log(this.cartContent);

    console.log(this.products[1]);

  }

  onRemoveFromCart = (id: number, qty: number) => {
    this.cartService.removeProduct(id);
    this.productsService.incrementQty(id, qty);
  }

  constructor(private productsService: ProductsService, private cartService: UserCartService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    });

    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }
}
