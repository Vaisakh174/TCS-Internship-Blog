import { TestBed } from '@angular/core/testing';

import { RootUserApiService } from './root-user-api.service';

describe('RootUserApiService', () => {
  let service: RootUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
