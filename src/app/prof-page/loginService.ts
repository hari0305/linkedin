import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class LoginService{
    private apiServerUrl = 'http://localhost:8080';
    
    constructor(private http: HttpClient){}

    public createlogin(data:any){
        return this.http.post<any>(`${this.apiServerUrl}/create-login`,data);
    }

    public validatelogin(data:any){
        return this.http.post<any>(`${this.apiServerUrl}/validate-login/`,data);
    }
}
 