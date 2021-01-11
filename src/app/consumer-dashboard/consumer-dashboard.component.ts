import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICard } from '../models/consumer-models/icard';
import { ICredit } from '../models/consumer-models/icredit';
import { IPurchasedproducts } from '../models/consumer-models/ipurchasedproducts';
import { IRecenttransactions } from '../models/consumer-models/IRecenttransactions';
import { ConsumerServiceService } from '../services/consumer-services/consumer-service.service';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.css']
})
export class ConsumerDashboardComponent implements OnInit {
 public username:string;
  getcard:ICard; 
  getcredit:ICredit;
  getpurchasedproducts:IPurchasedproducts;
  getrecenttransactions:IRecenttransactions;
  //getpurchasedproducts:Observable<IPurchasedproducts>;
  constructor(private consumerservice:ConsumerServiceService,private router:ActivatedRoute) { }
  getCard(username:string)
{
  this.consumerservice.GetCardDetails(username).subscribe((card:ICard)=>{
    this.getcard=card;
    console.log(this.getcard);

  })
}

getCredit(username:string)
{
  this.consumerservice.GetCreditDetails(username).subscribe((credit:ICredit)=>{
    this.getcredit=credit;
    console.log(this.getcredit);

  })
}

getProducts(username:string) 
{  
  //this.getpurchasedproducts = this.consumerservice.GetPurchasedProducts(username);  
this.consumerservice.GetPurchasedProducts(username).subscribe((product:IPurchasedproducts)=>{
  this.getpurchasedproducts=product;
  console.log(this.getpurchasedproducts);

})
}  
getTransactions(username:string)
{
  this.consumerservice.GetRecentTransactions(username).subscribe((transaction:IRecenttransactions)=>{
    this.getrecenttransactions=transaction;
    console.log(this.getrecenttransactions);
  })

}

  ngOnInit(): void{  
  this.username= this.router.snapshot.paramMap.get('id');
  this.getCard(this.username);
  this.getCredit(this.username);
  this.getProducts(this.username);
  this.getTransactions(this.username);   
  }  

}
