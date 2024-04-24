import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  reg_userName: string = "";
  reg_contactNumber: number = 0;
  reg_pswd: string = "";
  reg_cfm_pswd : string = "";

  constructor(private apiService: ApiService,
              private router : Router
  ){}

  registerUser(){
    let user = {
      "lgtype": "M",
      "mobile": this.reg_contactNumber,
      "password": this.reg_pswd,
      "username": this.reg_userName
    };
    this.apiService.registerUserApi(user).subscribe(
      ()=>{
        alert("Registered SuccessFully...");
        this.router.navigate(['/login']);
      },
      err => {}
    );
  }
}
