import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../Service/department.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  deptList: any[] = [];

  http = inject(HttpClient);   // new way to use httpclient except Dependency Injection

  constructor(private deptSrv : DepartmentService) {
       const result = this.deptSrv.addTwoNo(20,52)
       console.warn(result)
  }

  ngOnInit(): void {
    this.getDepartment();
  }


  onEdit(data: any) {
    // this.deptObj = new Department();

    this.deptObj = data;
  }

  getData(daata: any) {
    debugger;
  }

  onDelete(id: number) {

    const isDelete = confirm("Are you sure want to delete");
    if (isDelete) {
      this.http.delete(`https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=${id}`).subscribe((res: any) => {
        if (res.result) {
          alert("Department Deleted Success");
          this.getDepartment();
        } else {
          alert(res.message)
        }
      })
    }

  }

  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Created Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })


    // this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment" , this.deptObj).subscribe((res :any)=>{
    //       if(res.result){
    //          alert("Department Created Successfully");
    //          this.getDepartment();
    //       }
    //       else{
    //          alert(res.message)
    //       }
    // })


  }



  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Updated Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }


  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
    })

    // this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
    //     this.deptList = res.data;
    // })

  }

}
