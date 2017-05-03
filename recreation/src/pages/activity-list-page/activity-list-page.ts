import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ActivityPage} from '../activity-page/activity-page';
/**
 * Generated class for the ActivityListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity-list-page',
  templateUrl: 'activity-list-page.html',
})
export class ActivityListPage {
        activityName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityListPage');
    this.activityName=this.navParams.get('activityName');
  }
  public goToCricketPage(sport){
    this.navCtrl.push(ActivityPage,{"sportName":sport});
  }

}
