import { Component, OnInit } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  // array of all products to display
  products: InventoryProduct[];

  // array of categories to populate the category filter dropdown
  allCategories = [];

  // will be updated to always reflect the current value of the category filter dropdown
  filterCategory = 'All';

  // triggered by a change event on the category filter dropdown
  setFilterCategory(category: string) {
    this.filterCategory = category;
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(res => {
      // set the value of the products array
      this.products = res;
      // read through the categories of each product to populate the allCategories array
      this.products.forEach(product => {
        product.categories.forEach(category => {
          if (!this.allCategories.includes(category)) {
            this.allCategories.push(category);
          }
        });
      });
    });
  }
}
