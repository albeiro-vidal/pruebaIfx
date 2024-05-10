import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoModalComponentComponent } from './product-info-modal-component.component';

describe('ProductInfoModalComponentComponent', () => {
  let component: ProductInfoModalComponentComponent;
  let fixture: ComponentFixture<ProductInfoModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInfoModalComponentComponent]
    });
    fixture = TestBed.createComponent(ProductInfoModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
