import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionsPage } from '../sessions/sessions';
import { TestPage } from '../test/test';
import { ProgramProvider } from '../../providers/program';
import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-program-details',
  templateUrl: 'program-details.html',
})
export class ProgramDetailsPage {

  public buttonStatus:string;
  public prog:any;

  constructor(
    public navCtrl: NavController,
    public programSer:ProgramProvider,
    public navParams: NavParams) {
   this.prog =  this.navParams.data.data;
   this.checkJoinButtonStatus();
  }

  ionViewDidLoad() {
   
  }
  viewSessions() {
  	this.navCtrl.push(SessionsPage);
  }
  test() {
   this.navCtrl.setRoot(TestPage); 
  }
  checkJoinButtonStatus() {
    this.programSer.checkIfPaidOrNot(this.prog.id)
      .subscribe((res:any) => {
        if(res.length == 0) {
          this.buttonStatus = "Join Program";
        }else {
          if(res[0].approve == 0)
          this.buttonStatus = "Waiting Admins Approval";
          if(res[0].approve == 1){
            this.buttonStatus = "View Sessions";
          }
        }
      },(e) => {
        localStorage.removeItem('access_tocken');
        this.buttonStatus = "login";
      })
  }
  pay(prog){
    console.log(prog);
    this.navCtrl.push(PaymentPage,{data:prog});
  }

}
