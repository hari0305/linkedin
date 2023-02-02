import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../prof-page/loginService';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedvarService } from '../sharedvar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  tog:string  = "log";

  public lid : number = -1;

  constructor(private loginService: LoginService, private router: Router, private sharedvar: SharedvarService){}


  ngOnInit(): void {
    this.sharedvar.currentid.subscribe(lid=>this.lid = lid);
  }


  createLogin(data:any){
    console.log(data);
    this.loginService.createlogin(data).subscribe((result)=>{
      console.log(result);
    });
    this.tog = "log";
  }

  validateLogin(data:any){
    console.log(data);  
    this.loginService.validatelogin(data).subscribe((result:any)=>{
      console.log(result);
      if(result!=null){
        this.lid = result.id;
        console.log(this.lid);
        this.sharedvar.updateid(result.id);
        this.router.navigate(['profile-page']);
      }
    })
  }

}
