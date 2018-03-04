import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { SessionModel } from '../../model/freeprogram';
import { SessionProvider } from '../../providers/session';
import { SessionFeedBackModel} from '../../model/freeprogram';

@IonicPage()
@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html',
})
export class SessionsPage {
  session:SessionModel;
  public tab:string;
  public sessionfeedback:SessionFeedBackModel[] =[];
  public feedbackGiven:boolean = true;
  public textfeedback:string = "";

  
  constructor(public navCtrl: NavController,
    public toast:ToastController,
    public sessionSer:SessionProvider,public navParams: NavParams) {
    this.session = this.navParams.data.data;
    this.tab = this.session.tab1;
    this.checkIfSessionFeedbackGiven()
    this.getSessionDetails();
 
  }

  ionViewDidLoad() {
    
  }
  getSessionDetails() {
    this.sessionSer.getSessionDetails(this.session.id)
      .subscribe((se:any) => {
        this.session =  new SessionModel(se.id,se.name,se.venue,se.date,se.banner,
          se.widebanner,se.description,se.tab1,se.tab2,se.tab3,
          se.tab1_content,se.tab2_content,se.tab3_content) 

          for(let key in se) {
            if(key.indexOf('objective') != -1 && se[key] != "") {
              this.sessionfeedback = [...this.sessionfeedback,new SessionFeedBackModel(this.session.id,key,se[key],0)];
            }
          }
      })
  }
  feedback() {
  	this.navCtrl.push(FeedbackPage);
  }
  checkIfSessionFeedbackGiven() {
    this.sessionSer.checkIfSessionFeedbackGiven({session_id:this.session.id})
    .subscribe((res) => {
      if(res.data == 'already taken')
      this.feedbackGiven = false;
    })
  }
  
  makeValid(){
    for(let fee of this.sessionfeedback){
      if(!fee.rating && fee.question) {return false;}
    }
    if(!this.textfeedback) return false;
    return true;
  }
  submit() {
    let allfeedback = {session_id:this.session.id,objective:this.sessionfeedback,textfeedback:this.textfeedback};
    this.sessionSer.createFeedback( allfeedback)
    .subscribe((res) => {
      this.toast.create({
        message: 'Feedback recordeded',
        duration: 3000,
        position: 'top'
      });
      this.feedbackGiven = true;
    })
  }

}
