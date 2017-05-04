import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, AlertController} from 'ionic-angular';
import { Camera } from 'ionic-native';
import { DomSanitizer } from '@angular/platform-browser';

/*
  Generated class for the MyAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html'
})
export class MyAccountPage {

  private imageSelected: boolean
  public base64Image: string
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastController: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    public _DomSanitizationService: DomSanitizer) {
        this.base64Image = "assets/images/avatar_user_image.png";
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }
  public openFileChooser() {

    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Choose Photo',
          handler: () => {
            this.getPicture(0); // 0 == Library
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.getPicture(1); // 1 == Camera
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();

  }
  getPicture(sourceType: number) {
    Camera.getPicture({
      quality: 100,
      destinationType: 0, // DATA_URL
      sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.base64Image = `data:image/jpeg;base64,${imageData}`;
      console.log("BASE64 : " + this.base64Image);
      this.imageSelected = true;
    }, (err) => {
      console.log(`ERROR -> ${JSON.stringify(err)}`);
    });
  }
}
