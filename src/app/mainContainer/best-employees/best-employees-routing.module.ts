import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestEmployeesComponent } from './best-employees.component';

const routes: Routes = [
  { path: '', component: BestEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestEmployeesRoutingModule {}