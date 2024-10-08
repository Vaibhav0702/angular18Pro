import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StracturalDirComponent } from './Components/Directive/stractural-dir/stractural-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , AddEmployeeComponent, EmployeeListComponent , DataBindingComponent , StracturalDirComponent], //import allo components directly here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18Pro';
}
