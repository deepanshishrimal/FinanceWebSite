import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class UserloginServicesService {

  Url :string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.Url = 'http://localhost/Finance/api/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : any){  
    debugger;  
     var a =this.Url+'Login/LoginConsumer/';  
   return this.http.post<any>(this.Url+'Login/LoginConsumer/',model,{ headers: this.header});  
  }   
}
