import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';

describe('CartComponent', () => {
  let fixture: ComponentFixture<CartComponent>;
  let component: CartComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.cartContent = [{
      id: 1,
      name: 'Walkman',
      price: 99.00,
      isImported: false,
      isTaxExempt: false,
      qty: 1,
    }];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onRemoveFromCart when button is clicked', async(() => {
    component.cartContent = [{
      id: 1,
      name: 'Walkman',
      price: 99.00,
      isImported: false,
      isTaxExempt: false,
      qty: 1,
    }];
    fixture.detectChanges();
    spyOn(component, 'onRemoveFromCart');
    debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onRemoveFromCart).toHaveBeenCalled();
  }));
});
