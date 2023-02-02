import { TestBed } from '@angular/core/testing';

import { SharedvarService } from './sharedvar.service';

describe('SharedvarService', () => {
  let service: SharedvarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedvarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
