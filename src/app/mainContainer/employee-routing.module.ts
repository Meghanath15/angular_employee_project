import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmpComponent  } from './add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

const routes: Routes = [
  { path: 'add', component: AddEmpComponent },
  { path: ':id', component: EmployeeDetailsComponent },
  { path: '', pathMatch: 'full', component: AllEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}