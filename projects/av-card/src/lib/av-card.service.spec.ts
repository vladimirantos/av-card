import { TestBed } from '@angular/core/testing';

import { AvCardService } from './av-card.service';

describe('AvCardService', () => {
  let service: AvCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
