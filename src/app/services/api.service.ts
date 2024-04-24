import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstant } from '../common/global.constant';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

   constructor(private httpClient : HttpClient) { }


  getApi(apiUrl:string){
    return this.httpClient.get(apiUrl);
  }

  postApi(apiUrl:string, request:any){
    return this.httpClient.post(apiUrl, request);
  }

  putApi(apiUrl:string, request:any){
    return this.httpClient.put(apiUrl, request);
  }

  deleteApi(apiUrl:string){
    return this.httpClient.delete(apiUrl);
  }

  getLoginUser(userName: string, pswd:string){
    let apiUrl = GlobalConstant.userApiURL + "?username=" + userName + "&password=" + pswd;
    return this.getApi(apiUrl);
  }

  addExpenseApi(request : any){
    return this.postApi(GlobalConstant.expenseApiURL, request);
  }

  getExpenseApi(userName: string){
    let apiUrl = GlobalConstant.expenseApiURL + "?username=" + userName;
    return this.getApi(apiUrl);
  }

  registerUserApi(user:any){
    return this.httpClient.post(GlobalConstant.userApiURL, user);
  }

}


