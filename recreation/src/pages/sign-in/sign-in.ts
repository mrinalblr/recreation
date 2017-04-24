import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {RestClient} from '../../providers/rest-client';
import { Observable } from 'rxjs/Observable';
import { AlertController,LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the SignIn page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignIn {
  submitted = false;
 signup: {
   firstname?: string,
   lastname?: string,
   email?: string,
   password?: string} = {};
  response:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restClient:RestClient,public alertCtrl: AlertController,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignIn');
  }
public register(form){
  if(form.valid) {
      this.submitted = true;
      var jsonInput = {
        "emailId": this.signup.email,
        "firstName": this.signup.firstname,
        "lastName": this.signup.lastname,
        "password": this.signup.password
      };
   console.log(jsonInput);
   let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
  this.restClient.registerUser(jsonInput).subscribe(
        data => {

            loader.dismiss();
          this.response = data;
        console.log("Response : ",this.response);
          if (this.response.status == "SUCCESS") {

                this.uponSuccess();
                  this.navCtrl.setRoot(HomePage);

          }
          else if (this.response.status == "FAILURE") {

          }

          else {

          }
        }
      );
}
}
public uponSuccess(){

  let confirm = this.alertCtrl.create({
    title: 'Sign Up!',
    message: 'Thank you '+this.response.firstName+' you are '+this.response.successMessage,
    buttons: [

      {
        text: 'OK',
        handler: () => {
          this.navCtrl.push(HomePage)
        }
      }
    ]
  });
  confirm.present();

  }

}
