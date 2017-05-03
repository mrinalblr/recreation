import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{SignupPage} from '../pages/signup/signup';
import {SignIn} from '../pages/sign-in/sign-in';
import {Test} from '../pages/test/test';
import {RestClient} from '../providers/rest-client';
import {ActivityListPage} from '../pages/activity-list-page/activity-list-page';
import {ActivityPage} from '../pages/activity-page/activity-page';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SignIn,
    Test,
    ActivityListPage,
    ActivityPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SignIn,
    Test,
    ActivityListPage,
    ActivityPage

  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    RestClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
