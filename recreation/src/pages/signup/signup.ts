import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SignIn} from '../sign-in/sign-in';
import{HomePage} from '../home/home';
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    submitted = false;
  loginObj: {

    email?: string
    password?: string} = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }
public login(){
  this.navCtrl.push(HomePage);
}
 public signup(){
     this.navCtrl.push(SignIn);

 }
}
