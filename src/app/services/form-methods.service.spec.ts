import { TestBed } from '@angular/core/testing';

import { FormMethodsService } from './form-methods.service';

describe('FormMethodsService', () => {
  let service: FormMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
