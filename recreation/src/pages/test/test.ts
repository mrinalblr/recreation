import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RestClient} from '../../providers/rest-client';
/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {

  constructor(public navCtrl: NavController, public navParams: NavParams,public restClient:RestClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Test');
    this.fetchAllSports();
  }
  create(no){
    let i=0;
    for(i=0;i<no;i++){
        no++;
    }
  }
  public fetchAllSports(){
       let inputJson={
         "sportsName":"Cricket"
       };
       this.restClient.getAllSports(inputJson)
       .subscribe(data => {
         console.log("Sports details : ",data);
       });
  }

}
