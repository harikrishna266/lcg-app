import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { RulesPage } from '../rules/rules';
import { AnsweredPage } from '../answered/answered';
import { SingleQuestionPage } from '../single-question/single-question';
import { ResultsPage } from '../results/results';
import { ProgramsPage } from '../programs/programs';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  
  public test 
  public questions:any = [];
  public pagingIndex:number = 0;
  public pageSizeOptions = [ 10, 25, 100];
  public startTest:boolean = false;
  public minute:any  = .1;
  public seconds:any =0;

  constructor(public modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
      for(let i=0;i<100;i++) {
      this.questions = [
                        ...this.questions,
                        {q:'this is a question'+ i, id:i,
                         sele:'',
                         o:[
                            {option: 'a',key: 1},
                            {option: 'b',key: 2},
                            {option: 'c',key: 3},
                            {option: 'd',key: 4},
                            {option: 'e',key: 5}
                          ]
                        }
                      ];
    }
  }
 showResults() {
  let result = this.modal.create(ResultsPage);
  result.present(); 
  result.onDidDismiss(() => {
    this.navCtrl.setRoot(ProgramsPage);
  })
 }
  startTimer() {
    const interval = 1000;
    const duration = (this.minute*60*1000)+(this.seconds*1000) ;
    this.startTest = true;

    const stream$ = Observable.timer(0, interval)
      .finally(() => this.showResults())
      .takeUntil(Observable.timer(duration))
      .map(value => duration - 1000*value );
      stream$.subscribe(value => { 
          this.minute = Math.floor(value/(1000*60));
          this.seconds = (value%(1000*60)/1000);          
      });
  }
  openQuestion(i) {
      let question = this.modal.create(SingleQuestionPage,{data:i});
      question.present();
  }
  ionViewDidLoad() {
    this.showrules()
  }
  showrules() {
  	let rules = this.modal.create(RulesPage);
    rules.present();
    rules.onDidDismiss(() => {
      this.startTimer();
    })
  }
  answered(){
    let answered = this.modal.create(AnsweredPage);
  	answered.present(); 
  }
}
