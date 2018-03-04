import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {
  public test:any;
  constructor(public navCtrl: NavController, 
    public view: ViewController,
    public navParams: NavParams) {
    this.test = this.navParams.data.data;
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }
  start() {
    this.view.dismiss({data:'start'});
  }

}
