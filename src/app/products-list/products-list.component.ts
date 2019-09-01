import { Component, Input, OnChanges } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnChanges {

  @Input() products: InventoryProduct[];

  constructor() { }

  ngOnChanges(changes) {
    console.log(changes);
  }

}
