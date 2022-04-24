import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEmployeesComponent } from './mainContainer/all-employees/all-employees.component';
import { EditEmployeeComponent } from './mainContainer/edit-employee/edit-employee.component';
import { AddEmpComponent } from './mainContainer/add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './mainContainer/employee-details/employee-details.component';
import { BestEmployeesComponent } from './mainContainer/best-employees/best-employees.component';

const routes: Routes = [
  { path: 'employees/add', component: AddEmpComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: 'employees', component: AllEmployeesComponent },
  { path: 'bestEmployees', component: BestEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
