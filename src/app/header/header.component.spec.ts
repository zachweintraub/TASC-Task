import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserCartService } from '../services/user-cart.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ UserCartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate with an empty array, cartContent', () => {
    expect(component.cartContent).toEqual([]);
  });

  it('should calculate the total number of items in the cart', () => {
    component.cartContent = [{
      id: 1,
      name: 'Walkman',
      price: 99.00,
      isImported: false,
      isTaxExempt: false,
      qty: 3,
    }];
    expect(component.calculateCount()).toEqual(3);
  });
});
