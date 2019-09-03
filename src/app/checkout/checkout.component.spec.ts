import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CheckoutComponent } from './checkout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let debugElement: DebugElement;
  const dummyCart = [
    {
      id: 1,
      name: 'Snickers',
      price: 75.99,
      isImported: true,
      isTaxExempt: true,
      qty: 1,
    },
    {
      id: 2,
      name: 'Discman',
      price: 55.00,
      isImported: false,
      isTaxExempt: false,
      qty: 1,
    },
    {
      id: 3,
      name: 'Wine',
      price: 10.00,
      isImported: true,
      isTaxExempt: false,
      qty: 1,
    },
    {
      id: 4,
      name: 'Coffee',
      price: 997.99,
      isImported: false,
      isTaxExempt: true,
      qty: 1,
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate individual taxes for a given item', () => {
    const expectedOutput = {salesTax: 0, importTax: 3.8};
    const actualOutput = component.calculateTaxes(dummyCart[0]);
    expect(expectedOutput).toEqual(actualOutput);
  });

  it('should calculate the total taxes for an individual item', () => {
    const expectedOutput = 60.5;
    const actualOutput = component.calculateProductTotal(dummyCart[1]);
    expect(expectedOutput).toEqual(actualOutput);
  });

  it('should calculate the grand total for the entire cart', () => {
    const expectedOutput = 1149.78;
    component.cartContent = dummyCart;
    const actualOutput = component.calculateGrandTotal();
    expect(expectedOutput).toEqual(actualOutput);
  });

  it('should display a price accordingly with parsePrice', () => {
    const expectedOutput = '$1,149.78';
    const actualOutput = component.parsePrice(1149.78);
    expect(expectedOutput).toEqual(actualOutput);
  });

  it('should trigger confirmPurchase method on clicking confirm purchase button', () => {
    spyOn(component, 'confirmPurchase');
    debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.confirmPurchase).toHaveBeenCalled();
  });
});
