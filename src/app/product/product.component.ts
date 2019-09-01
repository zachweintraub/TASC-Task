import { Component, OnChanges, Input } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges {

  @Input() product: InventoryProduct;
  @Input() qty: number;

  inventoryQtyArray: number[];
  
  parsePrice = (price: number): string => {
    const priceString = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${priceString}`;
  }
  
  constructor() { }
  
  ngOnChanges() {
    this.inventoryQtyArray = Array(this.qty).fill(0).map((x, i) => i + 1);
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   this.inventoryQtyArray = Array(this.product.inventoryQty).fill(0).map((x, i) => i + 1);
  // }




}
