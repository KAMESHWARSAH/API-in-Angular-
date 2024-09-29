import { TestBed } from '@angular/core/testing';

import { SpotDeletionService } from './spot-deletion.service';

describe('SpotDeletionService', () => {
  let service: SpotDeletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotDeletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
