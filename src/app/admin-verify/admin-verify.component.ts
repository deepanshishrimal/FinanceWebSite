import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from '../models/admin-models/iadmin';
import {AdminservicesService} from './../services/admin-services/adminservices.service';
@Component({
  selector: 'app-admin-verify',
  templateUrl: './admin-verify.component.html',
  styleUrls: ['./admin-verify.component.css']
})
export class AdminVerifyComponent implements OnInit {
consumer:IAdmin;
  constructor(private adminservices:AdminservicesService,private router:Router) { 
  }

  ValidCustomer()
  {
    this.adminservices.ValidCustomer(this.consumer).subscribe(
      (data:string)=>{
        alert("content verifed");
        this.router.navigate(['/admin-dashboard']);
      }
    );
  }

  saveconsumer(consumer:IAdmin):void{
    this.ValidCustomer();
  }
  ngOnInit(): void {
  }

}
