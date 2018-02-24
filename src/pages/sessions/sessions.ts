import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
@IonicPage()
@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html',
})
export class SessionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionsPage');
  }
  feedback() {
  	this.navCtrl.push(FeedbackPage);
  }

}
