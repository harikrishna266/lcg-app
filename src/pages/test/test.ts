import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { RulesPage } from '../rules/rules';
import { AnsweredPage } from '../answered/answered';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  

  constructor(public modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  showrules() {
  	let rules = this.modal.create(RulesPage);
  	rules.present();
  }
  answered(){
    let answered = this.modal.create(AnsweredPage);
  	answered.present(); 
  }
}
