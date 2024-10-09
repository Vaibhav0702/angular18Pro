import { ChangeDetectorRef, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  firstName = signal("Vaibhav");
  lastName = signal("Ginnalwar");

  fullName = computed(()=> this.firstName() +" "+this.lastName())

  courseName: string = "Angular 18 Pro";

  rollNo = signal<number>(229);

  cityList =  signal(["Pune",'Mumbai']);

  studentObj = signal({
    name:'Vaibhav',
    city:'Pune'
  })


  constructor() {

    setTimeout(() => {
      this.firstName.set("Dot Net");
      // this.courseName = "HTML";
    }, 2000);

  }


  changeStudetnCity() {
    this.studentObj.set({...this.studentObj(),city:'Mumbai'})
  }

  addCity() {
    this.cityList.set([...this.cityList(),"Nagpur"])
  }

  changeName() {
    this.firstName.set("Sachin")
  }


  changeLastName() {
    this.lastName.set("Tendulkar")
  }


}
