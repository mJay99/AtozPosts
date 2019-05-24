import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();

  constructor() {
    this.subject.next();
  }

// This method is used for alerting success messages. 
  alertSuccess(message: string) {
    this.subject.next({ type: 'Success', alertMessage: message })
  }

// This method is used for alerting error messages.
  alertError(message: string) {
    this.subject.next({ type: 'Error', alertMessage: message })
  }

//This method is used for accessing the alert object.

  getAlertMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
