import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../Service/department.service';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visiable: boolean = true;
  isWarnigDivVisiable: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  currentRole: string = '';

  constructor(private deptService: DepartmentService) {
    this.deptService.onRoleChange$.subscribe((role:string)=>{
      console.log("role Subject" , role)
      // this.currentRole = role
    })
    this.deptService.role$.subscribe((role:string)=>{
       console.log("role BehaviorSubject" , role)
       this.currentRole = role
    })
  }

  showDiv1() {
    this.div1Visiable = true;
  }
  hideDiv1() {
    this.div1Visiable = false;
  }
  toggleDiv2() {
    this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
  }


}
