import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { IUser } from '../../../model/interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:  IUser[] = [];
  alertMsg : string = '';
 customersList : any[] = [];


  constructor(private http: HttpClient) {
    this.getAllCustomers()
  }


  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList = result;
    })
  }



  getAllCustomers(){
     this.http.get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers').subscribe((res : any)=>{
          this.customersList = res.data
     })
  }

}
