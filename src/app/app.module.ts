import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VibrationPage } from '../pages/vibration/vibration';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';


import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DeviceMotion } from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    CameraPage,
    BarcodePage,
    DeviceMotionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    CameraPage,
    BarcodePage,
    DeviceMotionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    Geolocation,
    Camera,
    BarcodeScanner,
    DeviceMotion
  ]
})
export class AppModule {}
