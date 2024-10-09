import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {



  // apiUrl: string = "https://projectapi.gerasim.in/api/Complaint/"



  public onRoleChange$ : Subject<string> = new Subject<string>;

  public role$ : BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) { }

  getAllDept() {
    // return this.http.get(`${Constant.API_URL}GetParentDepartment`)
    return this.http.get(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT}`)
  }


  saveNewDept(deptObj: any) {
    // return this.http.post(`${Constant.API_URL}AddNewDepartment`, deptObj)
    return this.http.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`, deptObj)
  }


  addTwoNo(num1: number, num2: number) {
         return num1 + num2
  }



}
