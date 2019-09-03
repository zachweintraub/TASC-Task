import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';
import { ProductsService } from '../services/products.service';
import { UserCartService } from '../services/user-cart.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: InventoryProduct;
  @Input() qty: number;

  inventoryQtyArray: number[];

  cartContent: CartProduct[];

  desiredQty = 1;

  setDesiredQty(qty: number) {
    this.desiredQty = Number(qty);
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

  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }

  ngOnChanges() {
    if (this.qty > 0) {
      this.inventoryQtyArray = Array(this.qty).fill(0).map((x, i) => i + 1);
    }
  }
}
