import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { AddEmployeeComponent } from './employee/add/add-employee.component';
import { HomeComponent } from './employee/home/home.component';
import { EmployeeComponent } from './employee/emp/employee.component';
import { SearchEmployeeComponent } from './employee/srch/search-employee.component';
import { AddEmployeeCanDeactivateRouteGuardService } from './employee/rg/add-employee-can-deactivate-route-guard.service';
import { UpdateComponent } from './employee/update/update.component';


const routes: Routes = [
  {path: "employees", component: EmployeeListComponent},
  {path: "add", component: AddEmployeeComponent, canDeactivate: [AddEmployeeCanDeactivateRouteGuardService]},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employees/:id', component: EmployeeComponent},
  {path: 'search', component: SearchEmployeeComponent},
  {path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
