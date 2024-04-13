import { TestBed } from '@angular/core/testing';

import { ProdutccollectionsService } from './produtccollections.service';

describe('ProdutccollectionsService', () => {
  let service: ProdutccollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutccollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
