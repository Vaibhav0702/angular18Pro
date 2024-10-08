import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

   courseName : string = "Angular 18 Pro";
   inputType  = "checkBox";
   rollNo :number = 123;
   isIndian : boolean = true;
   currentDate : Date = new Date();
   myClassName : string = "bg-primary"
   stateName : string = 'Maharashtra'

   firstName = signal("Vaibhav") // 3rd way of dataBinding

   constructor(){

   }

   showAlert(message : string){
       alert(message)
   }

   changeCourseName(){
       this.courseName = "React JS"
   }

}
