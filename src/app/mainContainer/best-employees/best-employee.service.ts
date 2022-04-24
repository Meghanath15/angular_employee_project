import { Injectable } from '@angular/core';
import { EmployeeType } from '../type/employee.type';

@Injectable({
  providedIn: 'root',
})
export class BestEmployeesService {
  private emps: EmployeeType[] = [];

  constructor() {}

  getEmployees(): EmployeeType[] {
    return [...this.emps];
  }

  addItem(item: EmployeeType) {
    this.emps.push(item);
  }
}