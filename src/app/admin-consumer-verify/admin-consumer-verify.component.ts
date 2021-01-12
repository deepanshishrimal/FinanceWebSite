import { Component, OnInit } from '@angular/core';
import {AdminservicesService} from './../services/admin-services/adminservices.service';
@Component({
  selector: 'app-admin-consumer-verify',
  templateUrl: './admin-consumer-verify.component.html',
  styleUrls: ['./admin-consumer-verify.component.css']
})
export class AdminConsumerVerifyComponent implements OnInit {
consumerlist:any[];
  constructor(private adminservices:AdminservicesService) { 
    this.adminservices.getUnVerifiedConsumer().subscribe((data)=>{this.consumerlist=data;});
   }

  ngOnInit(): void {
  }

}
