import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedvarService {

  private messageSource = new BehaviorSubject<number>(0);
  currentid = this.messageSource.asObservable();
  constructor() { }

  updateid(id:number){
    this.messageSource.next(id);
  }
}
