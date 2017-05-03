import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import{SignIn} from '../sign-in/sign-in';
import{HomePage} from '../home/home';
import{RestClient} from '../../providers/rest-client';
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
    response:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public restClient:RestClient,public alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }
public login(form){
  if(form.valid) {
      this.submitted = true;
      var jsonInput = {
        "emailId": this.loginObj.email,

        "password": this.loginObj.password
      };
   console.log(jsonInput);
   let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
  this.restClient.login(jsonInput).subscribe(
        data => {

            loader.dismiss();
          this.response = data;
        console.log("Response : ",this.response);
          if (this.response.status == "SUCCESS") {

                this.uponSuccess(this.response);
                  //this.navCtrl.setRoot(HomePage);

          }
          else if (this.response.status == "FAILURE") {

          }

          else {

          }
        }
      );
}else {
  this.submitted = false;
  this.uponFailure("All Fields are mandatory.");
}
}
public uponSuccess(response){

if(this.loginObj.password==response.password){


  let confirm = this.alertCtrl.create({
    title: ' Login!',
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
}else{
  let confirm = this.alertCtrl.create({
    title: ' Invalid Login!',
    message: 'Please Enter valid EmailId or Password.',
    buttons: [

      {
        text: 'OK',
        handler: () => {
          console.log("Invalid Credentials");
        }
      }
    ]
  });
  confirm.present();
}
  }
  uponFailure(msg) {
    let status = this.alertCtrl.create({
      title: 'Login',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    });
    status.present();
  }
 public signup(){
     this.navCtrl.push(SignIn);

 }
}
