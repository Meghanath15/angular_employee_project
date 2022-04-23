import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EachEmployeeComponent } from './mainContainer/each-employee/each-employee.component';
import { AllEmployeesComponent } from './mainContainer/all-employees/all-employees.component';
import { EditEmployeeComponent } from './mainContainer/edit-employee/edit-employee.component';
import { AddEmpComponent } from './mainContainer/add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './mainContainer/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EachEmployeeComponent,
    AddEmpComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    AllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
