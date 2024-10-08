import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { StracturalDirComponent } from './Components/Directive/stractural-dir/stractural-dir.component';
import { AttributeDirectiveComponent } from './Components/Directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './Components/Control-Flow/ifelse/ifelse.component';
import { ForComponent } from './Components/Control-Flow/for/for.component';
import { PipeComponent } from './Components/Pipes/pipe/pipe.component';


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
  },
  {
    path : 'if-else',
    component : IfelseComponent
  },
  {
    path : 'for',
    component : ForComponent
  },
  {
    path : 'pipe',
    component : PipeComponent
  }
];
