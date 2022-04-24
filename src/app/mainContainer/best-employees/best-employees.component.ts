import { Component, OnInit } from '@angular/core';
import { EmployeeType } from '../type/employee.type';
import { BestEmployeesService } from './best-employee.service';

@Component({
  selector: 'app-best-employees',
  templateUrl: './best-employees.component.html',
  styleUrls: ['./best-employees.component.css'],
})
export class BestEmployeesComponent implements OnInit {
  bestEmps: EmployeeType[];
  constructor(private bestService: BestEmployeesService) { }

  ngOnInit(): void {
  }
   
  getBestEmployees(){
    this.bestEmps=this.bestService.getEmployees();
  }
}
