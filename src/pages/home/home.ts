import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import AppointmentProvider from "../../providers/AppointmentProvider/appointment";
import {AppointmentPage} from "../appointment/appointment";
import {ViewAppointmentPage} from "../view-appointment/view-appointment";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  apts: any[] = [];

  constructor(public navCtrl: NavController, public appointmentProvider: AppointmentProvider) {
    // this.appointmentProvider.getAll().then((data)=> console.log(data)).catch((err)=>console.log(err));
    let data = this.appointmentProvider.getData();
    data.available.forEach((date,i)=>{
      for (let key in date){
        if (date.hasOwnProperty(key)) this.apts.push({date: key, apts: date[key]})
      }
    });
    console.log(this.apts);
  }

  onShowApt(){
    console.log('onShowApt');
    this.navCtrl.push(ViewAppointmentPage);

  }
  onAddApt(){
    console.log('onAddApt');
    this.navCtrl.push(AppointmentPage);

  }

}
