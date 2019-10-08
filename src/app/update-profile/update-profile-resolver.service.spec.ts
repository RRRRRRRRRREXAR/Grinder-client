import { TestBed } from '@angular/core/testing';

import { UpdateProfileResolverService } from './update-profile-resolver.service';

describe('UpdateProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateProfileResolverService = TestBed.get(UpdateProfileResolverService);
    expect(service).toBeTruthy();
  });
});
