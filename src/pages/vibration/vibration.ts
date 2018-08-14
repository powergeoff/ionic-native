import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation'

@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {
  public latitude: number;
  public longitude: number;

  constructor(private geo: Geolocation, private vibration: Vibration, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

  vibrate(){
    console.log('vibrate');
    this.vibration.vibrate(2000);
  }

  vibratePattern(){
    console.log('vibratePattern');
    this.vibration.vibrate([2000,1000,2000]);
  }
  
  getGeolocation(){
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.geo.getCurrentPosition(options).then( res => {
      this.latitude = res.coords.latitude;
      this.longitude = res.coords.longitude;
    }, 
    err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    });
  }

}
