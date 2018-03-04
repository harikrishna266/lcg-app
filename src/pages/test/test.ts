import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { RulesPage } from '../rules/rules';
import { AnsweredPage } from '../answered/answered';
import { PopoverController } from 'ionic-angular';
import { SingleQuestionPage } from '../single-question/single-question';
import { ResultsPage } from '../results/results';
import { ProgramsPage } from '../programs/programs';
import { TestModel, QuestionModel } from '../../model/freeprogram';
import { TestProvider } from '../../providers/test';

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


  public startTest: boolean = false;
  public testmodal;
  public testDetails: TestModel;
  public questions: QuestionModel[] = [];
  public pageIndex: number = 0;

  public minute;
  public seconds;
  public test:any;
  public program:any;
  

  constructor(public modal: ModalController,
    public navCtrl: NavController,
    public testSer: TestProvider,
    public popover:PopoverController,
    public navParams: NavParams) {
    this.program = this.navParams.data.program; 
    this.getTestDetails(this.program.id);
  }
  startTimer() {
    console.log('stat');
    const interval = 1000;
    const duration = (this.testDetails.duration * 60 * 1000);
    this.startTest = true;
    const stream$ = Observable.timer(0, interval)
      .finally(() => this.congrats())
      .takeUntil(Observable.timer(duration))
      .map(value => duration - 1000 * value);
    stream$.subscribe(value => {
      this.minute = Math.floor(value / (1000 * 60));
      this.seconds = (value % (1000 * 60) / 1000);
    });
  }
  goTo(to) {
    switch (to) {
      case 'first':
        this.pageIndex = 0;
        break;
      case 'prev':
        this.pageIndex = (this.pageIndex == 0) ? 0 : this.pageIndex - 1;
        break;
      case 'next':
        this.pageIndex = this.pageIndex + 1;
        break;
      case 'last':
        this.pageIndex = this.questions.length - 1;
        break;
      default:
        this.pageIndex = to;
    }

  }
  getTestDetails(test) {
    this.testSer.getTest(test)
      .subscribe((res: any) => {
        let test = res.test;
        this.testDetails = new TestModel(test.id, test.program_id, test.title, test.duration, test.guidelines);
        this.arrangeQuestions(res.question);
        this.openTest(this.testDetails);
      })
  }
  findQuestionWithTestIndex(answers) {
    for (let q of this.questions) {
      if (q.test_id == answers.test_id && q.id == answers.question_id) {
        q.selected = answers.answer;
      }
    }
  }
  presentPopover(){
    let popover = this.popover.create(SingleQuestionPage,{data:this.questions});
    popover.present();
    popover.onDidDismiss((e) => {
      console.log(e);
      this.pageIndex  = e;
    })
  }
  arrangeQuestions(question) {
    for (let q of question) {
      this.questions = [...this.questions, new QuestionModel(q.id, q.test_id, q.question, q.answer_1, q.answer_2, q.answer_3, q.answer_4, q.answer_5, q.correct_answer, q.seleted)]
    }
    
    this.testSer.getOldAnswers(this.testDetails.id)
      .subscribe((res: any) => {
        for (let answers of res.answers) {
          this.findQuestionWithTestIndex(answers)
        }
      })
  }
  markteststart(test) {
    this.testSer.MarkTestStarted(test.id)
        .subscribe(res => {
          if(res != "updated") {
            let StartTime  = new Date(res.starttime).getTime()
            let currentTime = new Date().getTime();
            let timeelapsed = currentTime-StartTime;
            let testTime =   this.testDetails.duration*60*1000;
            this.testDetails.duration =  parseInt(((testTime- timeelapsed)/(1000*60)).toFixed(2));
          }
          this.startTimer();  
        })
  }

  openTest(test) {
    let testrules = this.modal.create(RulesPage,{data:test});
    testrules.present();
    testrules.onDidDismiss((data) => {
      if(data) {
        this.markteststart(test);
      }
    })
  }
  markAnswer(testid, answer, question) {
    this.testSer.MarkAnswers(testid, answer, question).subscribe(res => { });
  }
  congrats() {
   
  }
  ngOnInit() {

  }
}
