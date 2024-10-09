import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:  any[] = [];
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
