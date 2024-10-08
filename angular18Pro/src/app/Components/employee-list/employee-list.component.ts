import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  // templateUrl: './employee-list.component.html',// add external HTML file
  // styleUrl: './employee-list.component.css' // add external css File
  template : '<h1 class="primary">Hello</h1>', // create html directly
  styles : ['.primary{color:red}']
})
export class EmployeeListComponent {

}
