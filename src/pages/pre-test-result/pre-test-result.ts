import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreTestResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-test-result',
  templateUrl: 'pre-test-result.html',
})
export class PreTestResultPage {

  public score:any;
  public total:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.score = this.navParams.data.score;
    this.total = this.navParams.data.total;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreTestResultPage');
  }

}
