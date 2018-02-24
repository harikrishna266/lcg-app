import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { ProgramDetailsPage } from '../program-details/program-details';
import { TestPageModule } from '../test/test.module';

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  constructor(public navCtrl: NavController, public modal:ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }
  moreDetails() {
      this.navCtrl.push(ProgramDetailsPage)
  }

	Pay() {
			let payment = this.modal.create(PaymentPage);
			payment.present();
	}
  test() {
      this.navCtrl.push(TestPageModule);
  }
}
