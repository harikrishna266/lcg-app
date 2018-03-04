import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

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
  public questions:any;
  selected:any;

  constructor(public navCtrl: NavController, public view: ViewController ,public navParams: NavParams) {
    this.questions = this.navParams.data.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleQuestionPage');
  }
  openQuestion(i){
    this.view.dismiss(i);
  }

}
