import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ViewController } from 'ionic-angular';
import { TestProvider } from '../../providers/test';
import { FeedBackModel } from '../../model/freeprogram'


@IonicPage()
@Component({
  selector: 'page-test-feedback',
  templateUrl: 'test-feedback.html',
})
export class TestFeedbackPage {

  public testid:any;
  public feedBack:FeedBackModel[] = [];
  public alreadyTaken: boolean = false;
  public textfeedback:string;

  constructor(public navCtrl: NavController,
    public testSer:TestProvider,
    public toast:ToastController,
    public view:ViewController,
    public navParams: NavParams) {
    this.testid = this.navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestFeedbackPage');
  }
  ngOnInit() {
    this.testSer.getProgramFeedbackForms(this.testid)
      .subscribe(res => {
        for(let key in res) {
          if(key.indexOf('objective') != -1 && res[key] != "") {
            this.feedBack = [...this.feedBack,new FeedBackModel(this.testid,key,res[key],0)];
          }
        }
        this.checkIfFeedbackGiven();
      })
  }
  checkIfFeedbackGiven() {
    this.testSer.checkIfTestFeedbackGiven( {test_id:this.testid})
    .subscribe(res => {
      if(res.data =="already taken")  {
        this.alreadyTaken = true;
      }
    })
  }
  close() {
    let allfeedback = {test_id:this.testid,objective:this.feedBack,textfeedback:this.textfeedback};
    this.testSer.createFeedback( allfeedback)
    .subscribe((res) => {
      this.toast.create({
        message: 'Feedback Submitted Successfully',
        duration: 3000,
        position: 'top'
      }).present();
    })
    this.view.dismiss();
    
  }
  makeValid(){
    for(let fee of this.feedBack){
      if(!fee.rating && fee.question) {return false;}
    }
    if(!this.textfeedback) return false;

    return true;
  }
}
