import { TestBed } from '@angular/core/testing';

import { BlistService } from './blist.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlistService = TestBed.get(BlistService);
    expect(service).toBeTruthy();
  });
});
