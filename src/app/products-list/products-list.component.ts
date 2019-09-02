import { Component, OnInit } from '@angular/core';
import { InventoryProduct } from '../InventoryProduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: InventoryProduct[];

  allCategories = [];

  filterCategory = 'All';

  setFilterCategory(category: string) {
    this.filterCategory = category;
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;

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
