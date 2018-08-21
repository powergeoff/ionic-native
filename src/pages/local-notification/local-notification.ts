import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-local-notification',
  templateUrl: 'local-notification.html',
})
export class LocalNotificationPage {
  public results: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
    let source = this.localNotifications.on('click');
    /* source.subscribe(res => {
      this.results = res.data.name;
      alert(`Note received! id:${res.data.id} name: ${res.data.name}`);
    }); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationPage');
  }

  scheduleNotification(){
    console.dir('scheduleNotification() clicked');
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      title: 'My Note',
      text: 'Single ILocalNotification',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { id: 27, name: 'Cool Note #27' }
    });
  }

}
