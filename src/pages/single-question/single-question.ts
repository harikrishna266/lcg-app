import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-question',
  templateUrl: 'single-question.html',
})
export class SingleQuestionPage {
  public question:any;
  selected:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.question =  navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleQuestionPage');
  }

}
