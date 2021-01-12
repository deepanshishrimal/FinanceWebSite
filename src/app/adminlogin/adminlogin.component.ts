import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { AdminloginServicesService } from './../services/login-services/adminlogin-services/adminlogin-services.service';    
 import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  model : any={};    
    
  errorMessage:string;    
  constructor(private router:Router,private AdminLoginService:AdminloginServicesService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('AdminName');    
    sessionStorage.clear();
  }
  adminlogin(){    
    debugger;    
    this.AdminLoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Admin']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    

}
