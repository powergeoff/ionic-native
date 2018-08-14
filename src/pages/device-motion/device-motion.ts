import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {
  data: any;
  subscription: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceMotion: DeviceMotion) {
  }
  
  startWatching(){
    let options = {
      frequency: 500
    }
    this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    });
  }

  stopWatching(){
    this.subscription.unsubscribe();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

}
