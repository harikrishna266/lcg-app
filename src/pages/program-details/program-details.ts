import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionsPage } from '../sessions/sessions';
import { TestPage } from '../test/test';
@IonicPage()
@Component({
  selector: 'page-program-details',
  templateUrl: 'program-details.html',
})
export class ProgramDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramDetailsPage');
  }
  viewSessions() {
  	this.navCtrl.push(SessionsPage);
  }
  test() {
   this.navCtrl.setRoot(TestPage); 
  }

}
