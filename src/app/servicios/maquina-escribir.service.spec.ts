import { TestBed } from '@angular/core/testing';

import { MaquinaEscribirService } from './maquina-escribir.service';

describe('MaquinaEscribirService', () => {
  let service: MaquinaEscribirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinaEscribirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
