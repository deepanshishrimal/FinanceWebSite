import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { ICard } from 'src/app/models/consumer-models/icard';
import { IPurchasedproducts } from 'src/app/models/consumer-models/ipurchasedproducts';
import { ICredit } from 'src/app/models/consumer-models/icredit';
import { IRecenttransactions } from 'src/app/models/consumer-models/IRecenttransactions';
@Injectable({
  providedIn: 'root'
})
export class ConsumerServiceService {
  url = 'http://localhost:55032/api/';  
  constructor(private http: HttpClient) { }  
  
  GetCardDetails(username: string): Observable<ICard> {  
    return this.http.get<ICard>(this.url + 'dashboard/GetCardDetails/'+username);  
  }  

  GetCreditDetails(username: string): Observable<ICredit> {
    return this.http.get<ICredit>(this.url + 'dashboard/GetCreditDetails/'+username);
  }

  GetPurchasedProducts(username: string): Observable<IPurchasedproducts> {  
    return this.http.get<IPurchasedproducts>(this.url + 'dashboard/GetPurchasedProducts/'+username);  
  } 

  GetRecentTransactions(username: string): Observable<IRecenttransactions> {
    return this.http.get<IRecenttransactions>(this.url + 'dashboard/GetRecentTransactions/'+username);  
  }
}
