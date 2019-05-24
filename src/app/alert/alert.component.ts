import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  alert: any;
  isSuccessAlert: boolean = false;
  isErrorAlert: boolean = false;

  constructor(private alertService: AlertService) {

  }

  close() {
    this.alert = undefined;
  }

  /* This function is used for getting the alerts every time new alert is generated.
     This is subscribed to the alertService Observable.  */
  ngOnInit() {
    this.subscription = this.alertService.getAlertMessage().subscribe(alert => {
      this.alert = alert;
      console.log(this.alert)

    },
      error => {
        console.log(error);
      });

  }
  /* This lifecycle hook  is used for destroying the subscription so 
  that there would be no memory leaks further. */
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log("Unscsribed");
  }
}
