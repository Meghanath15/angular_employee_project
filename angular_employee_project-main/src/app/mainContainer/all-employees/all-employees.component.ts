import { Component, OnInit,Output } from '@angular/core';
import { EmployeeType } from '../type/employee.type';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BestEmployeesService } from '../best-employees/best-employee.service';
import { MainEmployeeService } from '../mainEmployee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
   employees: EmployeeType[];
   
   constructor(private empService:MainEmployeeService, private bestEmpService: BestEmployeesService){
   }   

   ngOnInit(): void {
     this.employees=this.empService.getEmployees();
   }

   handleDeleteEmp(id: number) {
    console.log(id);
    this.empService.removeEmployee(id);
    this.employees=this.empService.getEmployees();
  }

  handleAddEmp(emp:EmployeeType){
    this.bestEmpService.addItem(emp);
  }

  // generateARandomId(min: number = 1000, max: number = 9999) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
}