import { TestBed } from '@angular/core/testing';

import { TransService } from './trans.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransService = TestBed.get(TransService);
    expect(service).toBeTruthy();
  });
});
