import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    EmailId:'vaibhav@mail.com',
    Password:'1234'
  };

  router =  inject(Router);
  http = inject(HttpClient)

  onLogin(){

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res:any)=>{
      if(res.result) {
        alert("login Success");
        localStorage.setItem('loginUser', JSON.stringify(res.data) )
        this.router.navigateByUrl('add-emp')
      } else {
        alert(res.message)
      }
    })
    // if(this.userObj.EmailId == "admin" && this.userObj.Password =="1234") {
    //   alert("login Success");
    //   localStorage.setItem('loginUser',this.userObj.EmailId)
    //   this.router.navigateByUrl('add-emp')
    // } else {
    //   alert('Wrong Credentials')
    // }
  }

}
