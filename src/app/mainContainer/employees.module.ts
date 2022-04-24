import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EachEmployeeComponent } from './each-employee/each-employee.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes=[];

@NgModule({
  declarations: [
    AllEmployeesComponent,
    EachEmployeeComponent,
    AddEmpComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [AllEmployeesComponent],
})
export class EmployeesModule {}