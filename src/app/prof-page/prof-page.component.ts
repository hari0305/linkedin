import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { LoginService } from './loginService';
import { SharedvarService } from '../sharedvar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof-page',
  templateUrl: './prof-page.component.html',
  styleUrls: ['./prof-page.component.css']
})

export class ProfPageComponent implements OnInit, OnDestroy{

  user: User;
  subs!: Subscription;
  edit: number = 0;
  tog: string = "";
  selected: number = 0;
  curlid: number= 10;
  t : any;
  experience: any;
  education: any;
  skills:any;
  skilltypes:any;
  selectedvalue:any;
  constructor(private userservice: UserService, http: HttpClient, private sharedvar: SharedvarService, private router: Router){
    this.user = this.userservice.getUsers();
    this.sharedvar.currentid.subscribe(lid=>this.curlid = lid);
    this.t = this.userservice.getUserDetails(this.curlid).subscribe(
      (response: any) => {
        this.t = response;
        console.log(this.t);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    console.log(this.t);
    this.getExperiences();
    this.getEducations();
    this.getSkillsTypes();
    this.getSkills();
  }
  ngOnInit(): void {
    this.sharedvar.currentid.subscribe(lid=>this.curlid = lid);
    console.log(this.curlid);
    this.user = this.userservice.getUsers();
    this.t = this.userservice.getUserDetails(this.curlid).subscribe(
      (response: any) => {
        this.t = response;
        console.log(this.t);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    this.skills = this.userservice.getSkills(this.curlid).subscribe(
      (response: any) => {
        this.skills = response;
      }
    )
    console.log(this.t);
    this.getExperiences();
    this.getEducations();
    this.getSkills();
  }

  savelid(){
    let data = this.curlid;
    localStorage.setItem('curlid', JSON.stringify(data));
  }

  getlid(){
    return localStorage.getItem('curlid');
  }

  logout(){
    localStorage.clear();
    this.sharedvar.updateid(-1);
    this.router.navigate(['app-login']);
  }
  updateProfile(data: any){
    console.log(data.value);
    this.t = this.userservice.updateDetails(data.value,this.curlid).subscribe(
      (response: any) => {
        this.t = response;
        console.log(this.t);
      }
    );
    this.tog="";
  }

  getExperiences(){
    this.userservice.getUserExperience(this.curlid).subscribe(
      (response: any) => {
        this.experience = response;
        console.log(this.experience);
      }
    );
  }

  addExperience(data: any){
    console.log(data.value);
    {
      this.userservice.addExperience(data.value,this.curlid).subscribe(
      (response: any) => {
        this.getExperiences();
      }
      );
    }
    this.tog="";
  }
  
  deleteExperience(id:number){
    console.log(id);
    this.userservice.deleteExperience(id).subscribe(
      (response: any) => {
        console.log(response);
      }
    );
    this.tog="";
    this.getExperiences();
  }

  updateExperience(update:any){
    this.userservice.updateExeperience(update.value).subscribe(
      (response:any) => {
        console.log(response);
        this.getExperiences();
      }
    );
    this.tog="";
  }

  getEducations() {
    this.userservice.getUserEducation(this.curlid).subscribe(
      (response: any) => {
        this.education = response;
        console.log(this.education);
      }
    );
  }

  addEducation(data: any){
    console.log(data.value);
    {
      this.userservice.addEducation(data.value,this.curlid).subscribe(
      (response: any) => {
        this.getEducations();
      });
    }
    this.tog="";
  }
  updateEducation(update : any){
    this.userservice.updateEducation(update.value).subscribe(
      (response:any) => {
        console.log(response);
        this.getEducations();
      });
    this.tog="";
  }
  deleteEducation(id: any){
    console.log(id);
    this.userservice.deleteEducation(id).subscribe(
      (response: any) => {
        console.log(response);
        this.getEducations();
      }
    );
    this.tog="";
    this.getEducations();
  }

  changeSkill(e:any){
    console.log(e.target.value);
    this.selectedvalue = e.target.value;
  }

  getSkillsTypes(){
    this.userservice.getSkillTypes().subscribe(
      (response: any) => {
        this.skilltypes = response;
      }
    );
  }

  getSkills()
  {
    this.userservice.getSkills(this.curlid).subscribe(
      (response: any) => {
        this.skills = response;
        console.log(this.skills);
      });
      console.log("from here");
      console.log(this.skills);
  }
  addSkill(){
    {
      this.userservice.addSkill(this.selectedvalue,this.curlid).subscribe(
      (response: any) => {
        this.getSkills();
      });
    }
    this.tog="";
  }


  updateSkill(update: any){
    console.log("from update skill");
    console.log(update);
    this.userservice.updateSkill(update.value,this.curlid).subscribe(
      (response:any) => {
        console.log(response);
        this.getSkills();
      });
    this.tog="";
  }

  deleteSkill(id : any){
    console.log(id);
    this.userservice.deleteSkill(id).subscribe(
      (response: any) => {
        console.log(response);
        this.getSkills();
      }
    );
    this.tog="";
  }

  // updateProfile(alot: NgForm){
  //   this.userservice.updateDetails(alot.value.FName,alot.value.SName,alot.value.inst,alot.value.city);
  //   this.tog="";
  // }
  // addEducation(alot: NgForm){
  //   this.userservice.addEducation(alot.value.Institute,alot.value.start,alot.value.End);
  //   this.edit=0;
  //   this.tog="";
  //   this.user = this.userservice.getUsers();
  // }
  // updateEducation(i: number, alot: NgForm){
  //   this.userservice.updateEducation(i,alot.value.Institute,alot.value.start,alot.value.End);
  //   this.tog="";
  // }
  // addExperience(alot: NgForm){
  //   //this.userservice.addEducation(alot.value.Institue,alot.value.start,alot.value.end);
  //   console.log(alot.value.Institute,alot.value.start,alot.value.End);
  //   // this.sample.push(alot.value.Institute);
  //   this.userservice.addExperience(alot.value.Institute,alot.value.start,alot.value.End);
  //   this.edit=0;
  //   this.tog="";
  //   this.user = this.userservice.getUsers();
  // }
  // updateExperience(i: number, alot: NgForm){
  //   this.userservice.updateExperience(i,alot.value.Institute,alot.value.start,alot.value.End);
  //   this.tog="";
  // }
  // addSkill(alot: NgForm){
  //   this.userservice.addSkill(alot.value.skill);
  //   this.tog="";
  // }
  // updateSkill(index:number, alot: NgForm){
  //   this.userservice.updateSkill(index,alot.value.skill);
  //   this.tog="";
  // }
  togValueto1(){
    this.edit = 1;
  }
  togValueto2(){
    this.edit = 2;
  }
  onEditEx(n:number){
    //console.log(n);
    this.selected=n;
    this.userservice.startedEditing.next(n);
    this.tog = 'updtEx';
  }
  onEditEd(n:number){
    console.log(n);
    this.selected=n;
    this.userservice.startedEditing.next(n);
    this.tog = 'updtEd';
  }
  onEditSk(n:number){
    console.log(n);
    this.selected=n;
    this.userservice.startedEditing.next(n);
    this.tog = 'updtSk';
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();

  }
}
