import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsrecommendationsComponent } from './detailsrecommendations.component';

describe('DetailsrecommendationsComponent', () => {
  let component: DetailsrecommendationsComponent;
  let fixture: ComponentFixture<DetailsrecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsrecommendationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsrecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
