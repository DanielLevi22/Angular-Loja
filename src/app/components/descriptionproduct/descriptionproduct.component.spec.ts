import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionproductComponent } from './descriptionproduct.component';

describe('DescriptionproductComponent', () => {
  let component: DescriptionproductComponent;
  let fixture: ComponentFixture<DescriptionproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
