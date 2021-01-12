import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { UserloginServicesService } from './../services/login-services/userlogin-services/userlogin-services.service';    
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  model : any={};    
    
  errorMessage:string;    
  constructor(private router:Router,private UserLoginService:UserloginServicesService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();
  }
  userlogin(){    
    debugger;    
    this.UserLoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Dashboard']);    
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
