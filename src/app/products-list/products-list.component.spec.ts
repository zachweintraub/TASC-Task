import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { CategoriesPipe } from '../categories.pipe';
import { ProductComponent } from '../product/product.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsListComponent,
        CategoriesPipe,
        ProductComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate with a full list of products', () => {
    expect(component.products.length).toEqual(9);
  });

  it('should insantiate with a default filterCategory value of All', () => {
    expect(component.filterCategory).toEqual('All');
  });

  it('should instantiate with a correctly populated allCategories array', () => {
    const expectedAllCategories = ['Food', 'Candy', 'Electronics', 'Foreign Goods', 'Transportation'];
    expect(component.allCategories).toEqual(expectedAllCategories);
  });

  it('should be able to set the category filter', () => {
    const expectedCategory = 'Transportation';
    component.setFilterCategory(expectedCategory);
    expect(expectedCategory).toEqual(component.filterCategory);
  });
});
