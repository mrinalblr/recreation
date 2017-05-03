import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ActivityListPage} from '../activity-list-page/activity-list-page';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

public goToActivityList(activity){
  this.navCtrl.push(ActivityListPage,{"activityName":activity});
}
}
