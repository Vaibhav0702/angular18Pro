import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {



  apiUrl: string = "https://projectapi.gerasim.in/api/Complaint/"

  constructor(private http: HttpClient) { }

  getAllDept() {
    return this.http.get(`${this.apiUrl}GetParentDepartment`)
  }


  saveNewDept(deptObj: any) {
    return this.http.post(`${this.apiUrl}AddNewDepartment`, deptObj)
  }


  addTwoNo(num1: number, num2: number) {
         return num1 + num2
  }



}
