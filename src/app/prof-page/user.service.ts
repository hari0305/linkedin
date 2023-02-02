import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { LoginService } from "./loginService";

@Injectable({
    providedIn:'root'
})

export class userService{

    private apiServerUrl = 'http://localhost:8080';
    constructor(private http: HttpClient, private loginservice: LoginComponent){}
    public createuser(data:any, id:number){
        return this.http.post<any>(`${this.apiServerUrl}/createUser/id/${id}`,data);
    }
}