import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { StracturalDirComponent } from './Components/Directive/stractural-dir/stractural-dir.component';
import { AttributeDirectiveComponent } from './Components/Directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './Components/Control-Flow/ifelse/ifelse.component';
import { ForComponent } from './Components/Control-Flow/for/for.component';
import { PipeComponent } from './Components/Pipes/pipe/pipe.component';
import { TemplateComponent } from './Components/forms/template/template.component';
import { ReactiveComponent } from './Components/forms/reactive/reactive.component';
import { GetApiComponent } from './Components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './Components/apiIntegration/post-api/post-api.component';
import { LifeCycleEventComponent } from './Components/life-cycle-event/life-cycle-event.component';
import { TemplateDirComponent } from './Components/Directive/template/template.component';
import { NgContainerComponent } from './Components/Directive/ng-container/ng-container.component';
import { ViewChildComponent } from './Components/Decorators/view-child/view-child.component';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';


export const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    component : LayoutComponent,
    children : [
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
      },
      {
        path : 'template',
        component : TemplateComponent
      },
      {
        path : 'reactive',
        component : ReactiveComponent
      },
      {
        path : 'get-api',
        component : GetApiComponent
      },
      {
        path : 'post-api',
        component : PostApiComponent
      },
      {
        path : 'lifeCycle',
        component : LifeCycleEventComponent
      },
      {
        path : 'ng-template',
        component : TemplateDirComponent
      },
      {
        path : 'ng-container',
        component : NgContainerComponent
      },
      {
        path : 'viewChild',
        component : ViewChildComponent
      }
    ]
  },

];
