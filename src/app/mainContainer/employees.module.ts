import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EachEmployeeComponent } from './each-employee/each-employee.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

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
    
  ],
  exports: [],
})
export class ProductsModule {}