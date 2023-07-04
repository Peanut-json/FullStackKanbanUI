import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './Page/main-view/main-view.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component:MainViewComponent
  },
  {
    path: 'employees',
    component:MainViewComponent
  },
  {
    path: 'employees/add',
    component:AddEmployeeComponent
  },
  {
    path: 'employees/edit:id',
    component:EditEmployeeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
