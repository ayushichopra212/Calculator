import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path : 'employees', component: EmployeeComponent},
  {path : 'employees/:id', component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
