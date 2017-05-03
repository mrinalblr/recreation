import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CallNumber} from 'ionic-native';
import {RestClient} from '../../providers/rest-client';
/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity-page',
  templateUrl: 'activity-page.html',
})
export class ActivityPage {

  activity:any;
  sportsDetails:any;
  host:any;
  sportsName:any;
  date:any;
  venue:any;
  description:any;
  time:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restClient:RestClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.activity = this.navParams.get('sportName');
    console.log(this.activity);
    this.fetchAllSports(this.activity);
  }
  public fetchAllSports(sportsName){
       let inputJson={
         "sportsName":sportsName
       };
       this.restClient.getAllSports(inputJson)
       .subscribe(data => {
         console.log("Sports details : ",data);
         if(data.status=="SUCCESS"){
            this.uponSuccess(data);
         }

       });
  }
  public uponSuccess(response){
    this.sportsDetails = response;
    this.host = response.host;
    this.sportsName = response.sportsName;
    this.date = response.date;
    this.time = response.time;
    this.venue = response.venue;
    this.description = response.description;
  }
  public callHost(){
    CallNumber.callNumber("7358411170",true)
    .then(() =>
    console.log('Launched Dialer!'))
    .catch(() => console.log('Error Launching Dialer') );
  }
}
