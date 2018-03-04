import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPageModule } from '../pages/login/login.module';
import { LandingPageModule } from '../pages/landing/landing.module';
import { ProgramsPageModule } from '../pages/programs/programs.module';
import { ProgramDetailsPageModule } from '../pages/program-details/program-details.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaymentPageModule } from '../pages/payment/payment.module';
import { SessionsPageModule } from '../pages/sessions/sessions.module';
import { FeedbackPageModule } from '../pages/feedback/feedback.module';
import { TestPageModule } from '../pages/test/test.module';
import { RulesPageModule } from '../pages/rules/rules.module';
import { AnsweredPageModule } from '../pages/answered/answered.module';
import { SingleQuestionPageModule } from '../pages/single-question/single-question.module';
import { ResultsPageModule } from '../pages/results/results.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { LoginProvider } from '../providers/login';
import { ApiService } from '../providers/api';
import { ProgramProvider } from '../providers/program';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    LandingPageModule,    
    ProgramsPageModule,
    ResultsPageModule,
    TestPageModule,
    ProgramDetailsPageModule,
    PaymentPageModule,
    HttpModule,
    HttpClientModule,
    SessionsPageModule,
    FeedbackPageModule,
    AnsweredPageModule,
    SingleQuestionPageModule,
    RulesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ApiService,
    ProgramProvider
  ]
})
export class AppModule {}
