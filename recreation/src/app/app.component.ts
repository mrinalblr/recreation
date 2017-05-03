import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SignupPage} from '../pages/signup/signup';
import {SignIn} from '../pages/sign-in/sign-in';
import {TabsPage} from '../pages/tabs/tabs';
import {ActivityListPage} from '../pages/activity-list-page/activity-list-page';
import {ActivityPage} from '../pages/activity-page/activity-page';
import {MyAccountPage} from '../pages/my-account/my-account';
import {MyActivityPage} from '../pages/my-activity/my-activity';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
