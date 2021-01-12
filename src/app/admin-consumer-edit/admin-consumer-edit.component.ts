import { Component, OnInit } from '@angular/core';
import {AdminservicesService} from '../services/admin-services/adminservices.service';
import {ActivatedRoute,Router} from '@angular/router';
import {IAdmin} from './../models/admin-models/iadmin';
@Component({
  selector: 'app-admin-consumer-edit',
  templateUrl: './admin-consumer-edit.component.html',
  styleUrls: ['./admin-consumer-edit.component.css']
})
export class AdminConsumerEditComponent implements OnInit {
consumer:IAdmin;
  constructor(private adminservices:AdminservicesService,private router:Router,private route:ActivatedRoute) { }

  getConsumerInfo(UserName:string)
  {
    this.adminservices.getData(UserName).subscribe((data:IAdmin)=>
    {
      this.consumer=data;
    })
  }
  editConsumer()
  {
    this.adminservices.editConsumer(this.consumer).subscribe(
      ()=>{
        alert("Details have been Edited");
        this.router.navigate(['/admin-dashboard']);
      }
    );
  }

  saveConsumer(consumer:IAdmin):void{
    this.consumer=consumer;
    this.editConsumer();
  }
  ngOnInit(): void {
    const UserName=this.route.snapshot.paramMap.get('UserName');
    this.getConsumerInfo(UserName);
  }

}
