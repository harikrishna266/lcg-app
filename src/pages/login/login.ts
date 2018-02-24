import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams } from 'ionic-angular';
import { ProgramsPage } from '../programs/programs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
  	this.navCtrl.setRoot(ProgramsPage);
  }

}
