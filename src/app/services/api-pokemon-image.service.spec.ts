import { TestBed } from '@angular/core/testing';

import { ApiPokemonImageService } from './api-pokemon-image.service';

describe('ApiPokemonImageService', () => {
  let service: ApiPokemonImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPokemonImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
