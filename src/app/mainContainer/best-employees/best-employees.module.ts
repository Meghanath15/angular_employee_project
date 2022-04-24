import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestEmployeesComponent } from './best-employees.component';
import { BestEmployeesRoutingModule } from './best-employees-routing.module';

@NgModule({
  declarations: [BestEmployeesComponent],
  imports: [
    CommonModule,
    BestEmployeesRoutingModule
  ],
  exports: []
})
export class BestEmployeesModule { }