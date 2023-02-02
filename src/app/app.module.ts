import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfPageComponent } from './prof-page/prof-page.component';
import { UserComponent } from './user/user.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import  { HttpClientModule } from '@angular/common/http';
import { LoginService } from './prof-page/loginService';
import { EducationComponent } from './prof-page/education/education.component';
import { RegisterComponent } from './login/register/register.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProfPageComponent,
    UserComponent,
    LoginComponent,
    EducationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
