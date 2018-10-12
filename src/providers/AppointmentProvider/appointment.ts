import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HTTP} from "@ionic-native/http";

/*
  Generated class for the AppointmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export default class AppointmentProvider {

  constructor(private httpClient: HttpClient, private http: HTTP) {
    this.httpClient.get('https://tutor.studysoup.com/api/schedule').subscribe((data) => console.log(data));
    // this.http.get('https://tutor.studysoup.com/api/schedule', {}, {})
    //   .then(data => {
    //
    //     console.log(data);
    //
    //   })
    //   .catch(error => {
    //
    //     console.log(error);
    //
    //   });
  }

  getAll() {
    this.http.get('https://tutor.studysoup.com/api/schedule', {}, {})
      .then(data => {
        return data
      })
      .catch(error => {
        throw error;
      });
  }

  addOne(guid: string, appointment: string) {
    this.http.post('https://tutor.studysoup.com/api/schedule', {guid, appointment}, {})
      .then(data => {
        return data
      })
      .catch(error => {
        throw error;
      });
  }

  changeOne(appointment: string, new_appointment: string) {
    this.http.put('https://tutor.studysoup.com/api/schedule', {appointment, new_appointment}, {})
      .then(data => {
        return data
      })
      .catch(error => {
        throw error;
      });
  }

  deleteOne(appointment: string) {
    this.http.delete('https://tutor.studysoup.com/api/schedule', {appointment}, {})
      .then(data => {
        return data
      })
      .catch(error => {
        throw error;
      });
  }

  getData() {
    return {"available": [{"2018-10-12": [9, 13, 20]}, {"2018-10-13": [11, 15, 20]}, {"2018-10-14": [8, 14, 18]}]};
  }

}
