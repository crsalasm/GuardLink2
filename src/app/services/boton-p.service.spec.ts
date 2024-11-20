import { TestBed } from '@angular/core/testing';

import { BotonPService } from './boton-p.service';

describe('BotonPService', () => {
  let service: BotonPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotonPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
