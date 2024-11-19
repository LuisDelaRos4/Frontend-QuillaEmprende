import { TestBed } from '@angular/core/testing';

import { ModulosyrolesService } from './modulosyroles.service';

describe('ModulosyrolesService', () => {
  let service: ModulosyrolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulosyrolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
