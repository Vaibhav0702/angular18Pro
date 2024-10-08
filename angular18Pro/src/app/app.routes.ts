import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { StracturalDirComponent } from './Components/Directive/stractural-dir/stractural-dir.component';
import { AttributeDirectiveComponent } from './Components/Directive/attribute-directive/attribute-directive.component';

export const routes: Routes = [
  {
    path : 'add-emp',
    component : AddEmployeeComponent
  },
  {
    path : 'data-binding',
    component : DataBindingComponent
  },
  {
    path : 'emp-list',
    component : EmployeeListComponent
  },
  {
    path : 'structural',
    component : StracturalDirComponent
  },
  {
    path : 'attribute',
    component : AttributeDirectiveComponent
  }
];
