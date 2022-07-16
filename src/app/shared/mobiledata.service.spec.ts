import { TestBed } from '@angular/core/testing';

import { MobiledataService } from './mobiledata.service';

describe('MobiledataService', () => {
  let service: MobiledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobiledataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
