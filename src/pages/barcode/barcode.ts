import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
declare var window: any;

@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  results: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    
  }

  scan(){
    this.barcodeScanner.scan().then((bcData) => {
      this.results = bcData;
    }, (err) => {
      alert('error scanning: ' + err)
    });
  }

  reset(){
    this.results = null;
  }

  lookup(){
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

}
