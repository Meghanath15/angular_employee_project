import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EachEmployeeComponent } from './mainContainer/each-employee/each-employee.component';
import { AllEmployeesComponent } from './mainContainer/all-employees/all-employees.component';
import { EditEmployeeComponent } from './mainContainer/edit-employee/edit-employee.component';
import { AddEmpComponent } from './mainContainer/add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './mainContainer/employee-details/employee-details.component';
import { BestEmployeesComponent } from './mainContainer/best-employees/best-employees.component';
@NgModule({
  declarations: [
    AppComponent,
    EachEmployeeComponent,
    AddEmpComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    AllEmployeesComponent,
    BestEmployeesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
