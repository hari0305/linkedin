import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import {  User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class UserService implements OnInit, OnDestroy{



  private apiServerUrl = 'http://localhost:8080';

  infoChanged = new Subject<User>();

  startedEditing = new Subject<number>();

  subscription!: Subscription;

  editMode = false;
  editedItem!:number;

  users : User = new User("Hari","Maredipudi","Telangana","Hyderabad","Neil Gogte Institue of Technology");
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.subscription = this.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItem = index;
        this.editMode = true;
      }
    )
  }
  getUsers(){
    return this.users;
  }

  getUserDetails(lid: number){
    console.log(this.http.get<any>(`${this.apiServerUrl}/getUserbyid/${lid}`));
    return this.http.get<any>(`${this.apiServerUrl}/getUserbyid/${lid}`);
  }

  // updateDetails(fn: string, ln:string, ins:string, citt:string ){
  //   this.users.updateDet(fn,ln,ins,citt);
  // }

  updateDetails(data:any, lid:number){
    return this.http.post<any>(`${this.apiServerUrl}/updateUser/id/${lid}`,data)
  }

  getUserExperience(lid: number) 
  {
    return this.http.get<any>(`${this.apiServerUrl}/getexperience/id/${lid}`);
  }

  addExperience(data: any, lid: number) {
    return this.http.post<any>(`${this.apiServerUrl}/createExperience/lid/${lid}`,data);
  }
  deleteExperience(id: number) {
    return this.http.get<any>(`${this.apiServerUrl}/delete-exp/id/${id}`);
  }
  updateExeperience(update: any) {
    return this.http.post<any>(`${this.apiServerUrl}/updateExperience`,update);
  }
  getUserEducation(curlid: number) {
    return this.http.get<any>(`${this.apiServerUrl}/get-education/lid/${curlid}`);
  }
  addEducation(data: any, lid: number) {
    return this.http.post<any>(`${this.apiServerUrl}/add-education/lid/${lid}`,data);
  }
  deleteEducation(id: number) {
    return this.http.get<any>(`${this.apiServerUrl}/delete-education/eid/${id}`);
  }
  updateEducation(update: any) {
    return this.http.post<any>(`${this.apiServerUrl}/edit-education`,update);
  }
  getSkills(curlid: number){
    return  this.http.get<any>(`${this.apiServerUrl}/get-skill/lid/${curlid}`);
  }
  getSkillTypes(){
    return this.http.get<any>(`${this.apiServerUrl}/get-skill-type`);
  }
  addSkill(sid:number,lid:number){
    return this.http.get<any>(`${this.apiServerUrl}/add-skill/lid/${lid}/sid/${sid}`);
  }
  updateSkill(update:any, lid:number){
    return this.http.post<any>(`${this.apiServerUrl}/update-skill/lid/${lid}`,update);
  }
  deleteSkill(sid:number){
    return this.http.get<any>(`${this.apiServerUrl}/delete-skill/sid/${sid}`);
  }
  // addEducation(insName: string, start: number, stop: number){
  //   this.users.addEducation(insName, start, stop);
  //   this.infoChanged.next(this.users);
  // }
  // updateEducation(index: number, insName: string, start: number, stop: number){
  //   this.users.updateEducation(index,new history(insName,start,stop));
  // }
  // addExperience(insName: string, start: number, stop: number){
  //   this.users.addExperience(insName,start,stop);
  //   this.infoChanged.next(this.users);
  // }
  // updateExperience(index: number, insName: string, start: number, stop: number){
  //   this.users.updateExperince(index, new history(insName,start,stop));
  // }
  // addSkill(skill:string){
  //   this.users.addSkills(skill);
  //   this.infoChanged.next(this.users);
  // }
  // updateSkill(index:number, skill:string){
  //   this.users.updateSills(index,skill);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
