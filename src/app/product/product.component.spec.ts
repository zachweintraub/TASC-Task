import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { UserCartService } from '../services/user-cart.service';
import { ProductsService } from '../services/products.service';
import { DebugElement } from '@angular/core';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [UserCartService, ProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.product = {
      id: 4,
      name: 'Vespa (Imported)',
      price: 15001.25,
      categories: ['Transportation', 'Foreign Goods'],
      isImported: true,
      isTaxExempt: false,
      inventoryQty: 5,
    };
    component.qty = component.product.inventoryQty;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use parsePrice to correctly display a dollar amount', () => {
    const expectedPrice = '$15,001.25';
    const actualPrice = component.parsePrice(component.product.price);
    expect(expectedPrice).toEqual(actualPrice);
  });

  it('should instantiate with an inventoryQtyArray representative of the product qty', () => {
    const expectedArray = [1, 2, 3, 4, 5];
    component.ngOnChanges();
    expect(expectedArray).toEqual(component.inventoryQtyArray);
  });

  it('should instantiate with a desiredQty of 1', () => {
    expect(component.desiredQty).toEqual(1);
  });

  it('should alter desiredQty using setDesiredQty', () => {
    component.setDesiredQty(5);
    expect(component.desiredQty).toEqual(5);
  });

  it('should trigger onAddToCart method with add to cart button', () => {
    spyOn(component, 'onAddToCart');
    debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onAddToCart).toHaveBeenCalled();
  });

  it('should trigger setDesiredQty method on selecting value from qty dropdown', () => {
    spyOn(component, 'setDesiredQty');
    debugElement
      .query(By.css('select'))
      .triggerEventHandler('change', {target: 'Food'});
    fixture.detectChanges();
    expect(component.setDesiredQty).toHaveBeenCalled();
  });
});
