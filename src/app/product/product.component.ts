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

  // the specific product this component will display
  @Input() product: InventoryProduct;

  // the qty of the product, inputted separately to trigger ngOnChanges
  @Input() qty: number;

  // a dynamically generated array to populate the desired quantity dropdown
  inventoryQtyArray: number[];

  // the contents of the cart, used to indicate whether the product is already in the cart
  cartContent: CartProduct[];

  // dynamically reflects the current value of the desired quantity dropdown
  desiredQty = 1;

  // triggered on change event of the desired quantity dropdown
  setDesiredQty(qty: number) {
    // use Number(qty) to fix bug - value was being stored as a string
    this.desiredQty = Number(qty);
  }

  // formats dollar amounts to display with the leading dollar symbol and commas where appropriate
  parsePrice = (price: number): string => {
    const priceString = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${priceString}`;
  }

  // creates a new instance of a CartProduct to represent this product in the cart
  onAddToCart = () => {
    const newProduct = new CartProduct(
      this.product.id,
      this.product.name,
      this.product.price,
      this.product.isTaxExempt,
      this.product.isImported,
      this.desiredQty
    );

    // add the product to the cart
    this.cartService.addProduct(newProduct);

    // decrement the product's inventory to reflect what has been added to the cart
    this.productsService.decrementQty(this.product.id, this.desiredQty);

  }

  constructor(private productsService: ProductsService, private cartService: UserCartService) { }

  // fetch the contents of the cart
  ngOnInit() {
    this.cartService.getCart().subscribe(res => {
      this.cartContent = res;
    });
  }

  // re-generate the inventoryQty array to reflect the current inventory level of the product
  ngOnChanges() {
    if (this.qty > 0) {
      this.inventoryQtyArray = Array(this.qty).fill(0).map((x, i) => i + 1);
    }
  }
}
