import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from '../common/global.constant';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  constructor(private router: Router) { }

  checkSession(ssKey:string) : boolean{
   let ssValue = sessionStorage.getItem(ssKey) || "";
    if(ssValue == ""){
      return false;
    }else{
      return true;
    }
  }

  checkUserSession(){
    if(!this.checkSession(GlobalConstant.userSession)){
      this.router.navigate(['']);
    }
  }

  getUserSession(){
    return sessionStorage.getItem(GlobalConstant.userSession) || '';
  }

  getSession(sessKey: string){
    return sessionStorage.getItem(sessKey);
  }

  setSession(ssKey: string, ssValue:string) : void{
    sessionStorage.setItem(ssKey, ssValue);
  }

  deleteSession(ssKey:string) : void{
    sessionStorage.removeItem(ssKey);
    console.log(ssKey + GlobalConstant.sessionRemoveMsg);
  }
}
