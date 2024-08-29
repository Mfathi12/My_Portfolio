import { TestBed } from '@angular/core/testing';

import { DisplaySkillsService } from './display-skills.service';

describe('DisplaySkillsService', () => {
  let service: DisplaySkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaySkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
