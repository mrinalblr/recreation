import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {MyAccountPage} from '../my-account/my-account';
import {MyActivityPage} from '../my-activity/my-activity';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

tab1Root = HomePage;
tab2Root= MyActivityPage;
tab3Root = MyAccountPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
