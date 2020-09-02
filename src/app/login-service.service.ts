import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loginStatus: BehaviorSubject<boolean>;


  constructor() {
    this.loginStatus = new BehaviorSubject<boolean>(false);
  }
  setValue(newValue:boolean): void {
    this.loginStatus.next(newValue);
  }
  getValue(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
}
