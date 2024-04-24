import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/common/global.constant';
import { ApiService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  userName: string = "";
  pswd: string = "";
  msg : string = "";
  

  ngOnInit(): void {

    this.userName = "shri";
  }

  constructor(private sessionService: SessionService, 
              private router: Router,
              private apiService: ApiService){}

  checkLogin(){
    let isSuccess = false;
    this.apiService.getLoginUser(this.userName, this.pswd).subscribe(
      (users: any)=>{
        console.log(users);        
          if(users && users.length > 0 && users[0].username == this.userName && users[0].password == this.pswd){
            this.sessionService.setSession(GlobalConstant.userSession, this.userName);
            this.sessionService.setSession(GlobalConstant.userLgType, users[0].lgtype);
            this.router.navigate([GlobalConstant.addExpenseRoute]);
          }else{
            this.msg = "Failed";
          }
      },
      err=>{
        console.log(err);
      }
    );
  }
}
