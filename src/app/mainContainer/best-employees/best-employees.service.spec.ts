import { TestBed } from '@angular/core/testing';

import {BestEmployeesService} from "./best-employee.service"
describe('BestEmployeesService', () => {
  let service: BestEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});