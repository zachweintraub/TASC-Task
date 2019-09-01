import { Component, OnChanges, Input } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';
import { ProductsService } from '../services/products.service';
import { UserCartService } from '../services/user-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges {

  @Input() product: InventoryProduct;

  inventoryQtyArray: number[];

  parsePrice = (price: number): string => {
    const priceString = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${priceString}`;
  }

  constructor(private productsService: ProductsService, private cartService: UserCartService) { }

  ngOnChanges() {
    this.inventoryQtyArray = Array(this.product.inventoryQty).fill(0).map((x, i) => i + 1);
  }




}
