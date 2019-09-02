import { Component, OnChanges, Input } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';
import { ProductsService } from '../services/products.service';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges {

  @Input() product: InventoryProduct;
  @Input() qty: number;

  inventoryQtyArray: number[];

  desiredQty = 1;

  setDesiredQty(qty: number) {
    this.desiredQty = qty;
    console.log(this.desiredQty);
  }

  parsePrice = (price: number): string => {
    const priceString = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${priceString}`;
  }

  onAddToCart = () => {
    const newProduct = new CartProduct(
      this.product.id,
      this.product.name,
      this.product.price,
      this.product.isTaxExempt,
      this.product.isImported,
      this.desiredQty
    );

    this.cartService.addProduct(newProduct);

    this.productsService.decrementQty(this.product.id, this.desiredQty);

  }

  constructor(private productsService: ProductsService, private cartService: UserCartService) { }

  ngOnChanges() {
    if (this.qty > 0) {
      this.inventoryQtyArray = Array(this.qty).fill(0).map((x, i) => i + 1);
    }
  }

}
