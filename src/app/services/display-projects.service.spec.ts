import { TestBed } from '@angular/core/testing';

import { DisplayProjectsService } from './display-projects.service';

describe('DisplayProjectsService', () => {
  let service: DisplayProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
