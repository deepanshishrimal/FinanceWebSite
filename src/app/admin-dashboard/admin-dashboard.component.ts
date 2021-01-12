import { Component, OnInit } from '@angular/core';
import {AdminservicesService} from './../services/admin-services/adminservices.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
consumerlist:any[];
  constructor(private adminservice:AdminservicesService) {
    this.adminservice.getConsumerList().subscribe((data)=>{this.consumerlist=data;});
   }

  ngOnInit(): void {
  }

}
