import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import {IAdmin} from '../../models/admin-models/iadmin';
@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
url='http://localhost/FinanceWebApi/api/admin/';
httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
  constructor(private http:HttpClient) { }
  getConsumerList():Observable<any[]>
  {
    return this.http.get<any[]>(this.url+"getVerifiedConsumers");
  }
  getData(UserName:string):Observable<IAdmin>{
    return this.http.get<IAdmin>(this.url+"getVerifiedConsumers/"+UserName);
  }
  editConsumer(consumer:IAdmin):Observable<IAdmin>{
    return this.http.put<IAdmin>(this.url+"PutConsumer/"+consumer.UserName,consumer,this.httpOptions);
  }
  deleteConsumer(UserName:string):Observable<IAdmin>{
    return this.http.delete<IAdmin>(this.url+"deleteConsumer/");
  }
  getUnVerifiedConsumer():Observable<any[]>
{
  return this.http.get<any[]>(this.url+"getUnverifiedConsumer");
}

ValidCustomer(consumer:IAdmin):Observable<string>
{
  return this.http.put<string>(this.url+"VerifyConsumer/"+consumer.UserName,consumer,this.httpOptions);
}
}
