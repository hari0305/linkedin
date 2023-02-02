import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/prof-page/loginService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  ngOnInit(){
    this.registerForm = new FormGroup({
      'email' : new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.registerForm);
  }

  lid : number = -1;

  constructor(private loginService: LoginService, private router: Router){}

  
}
