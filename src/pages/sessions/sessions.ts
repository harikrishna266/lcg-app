import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { SessionModel } from '../../model/freeprogram';

@IonicPage()
@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html',
})
export class SessionsPage {
  session:SessionModel;
  public tab:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.session = this.navParams.data.data;
    this.tab = this.session.tab1;
  }

  ionViewDidLoad() {
    
  }
  feedback() {
  	this.navCtrl.push(FeedbackPage);
  }

}
