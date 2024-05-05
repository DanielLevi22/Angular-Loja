import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsassessmentComponent } from './detailsassessment.component';

describe('DetailsassessmentComponent', () => {
  let component: DetailsassessmentComponent;
  let fixture: ComponentFixture<DetailsassessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsassessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
