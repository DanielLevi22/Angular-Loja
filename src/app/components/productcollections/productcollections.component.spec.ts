import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcollectionsComponent } from './productcollections.component';

describe('ProductcollectionsComponent', () => {
  let component: ProductcollectionsComponent;
  let fixture: ComponentFixture<ProductcollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
