import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import AppointmentProvider from "../providers/AppointmentProvider/appointment";
import {AppointmentPage} from "../pages/appointment/appointment";
import {ViewAppointmentPage} from "../pages/view-appointment/view-appointment";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppointmentPage,
    ViewAppointmentPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppointmentPage,
    ViewAppointmentPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppointmentProvider
  ]
})
export class AppModule {}
