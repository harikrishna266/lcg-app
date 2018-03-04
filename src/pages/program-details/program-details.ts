import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionsPage } from '../sessions/sessions';
import { TestPage } from '../test/test';
import { ProgramProvider } from '../../providers/program';
import { PaymentPage } from '../payment/payment';
import { ModalController } from 'ionic-angular';
import { SessionModel, PaidProgramModel} from '../../model/freeprogram';
import { SessionProvider } from '../../providers/session';

@IonicPage()
@Component({
  selector: 'page-program-details',
  templateUrl: 'program-details.html',
})
export class ProgramDetailsPage {

  public buttonStatus:string;
  public prog:PaidProgramModel;
  public sessions:SessionModel[] = [];
  public programtest:any;

  constructor(
    public navCtrl: NavController,
    public programSer:ProgramProvider,
    public sessionSev: SessionProvider,
    public modal:ModalController,
    public navParams: NavParams) {
      let res = this.navParams.data.data;
    this.prog =    new PaidProgramModel(res.id,res.name,
            res.venue,res.date,res.banner,
            res.widebanner,res.description,
            res.pre_course_material_1,res.pre_course_material_2,
            res.pre_course_material_name_1,res.pre_course_material_name_2,res.program_payment_instructions
        )
   this.checkJoinButtonStatus();
  }

  ionViewDidLoad() {
   
  }
  viewSessions(session) {
    this.navCtrl.push(SessionsPage,{data:session});
  }
  taketest(prog) {
   this.navCtrl.setRoot(TestPage,{program:prog}); 
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
            this.getPaidData(this.prog.id);
          }
        }
      },(e) => {
        localStorage.removeItem('access_tocken');
        this.buttonStatus = "login";
      })
  }
  pay(prog){
    let paymentModal = this.modal.create(PaymentPage,{data:prog})
    paymentModal.present();
    paymentModal.onDidDismiss((data) => {
      if(data) {
        this.buttonStatus = "Waiting Admins Approval";
      }
    })
  }
  getPaidData(id){
    console.log(id);
    this.getPaidProgram(id);
    this.getSessions(id);
    this.checktestStatus(id);
  }
  getPaidProgram(id){
    this.programSer.getPaidProgram(id)
      .subscribe(res => {
        this.prog = new PaidProgramModel(res.id,res.name,
                                                res.venue,res.date,res.banner,
                                                res.widebanner,res.description,
                                                res.pre_course_material_1,res.pre_course_material_2,
                                                res.pre_course_material_name_1,res.pre_course_material_name_2,
                                                res.program_payment_instructions
                                              )
      })
  }
  getSessions($program_id) {
    this.sessionSev.getPaidSession($program_id)
      .subscribe(res => {
        for(let se of res) {
         this.sessions = [...this.sessions,
                         new SessionModel(se.id,se.name,se.venue,se.date,se.banner,
                                    se.widebanner,se.description,se.tab1,se.tab2,se.tab3,
                                    se.tab1_content,se.tab2_content,se.tab3_content)   
                        ] 
        }
      },() => {

      })
  }
  checktestStatus(id) {
    this.programSer.getActiveTest(id)
      .subscribe(res => {
        if(res.length > 0) {
          this.buttonStatus = 'Take Test';
          this.programtest = res[0];
        }
      })
  }
  open(link){
    window.open(link,'_blank');
  }
}
