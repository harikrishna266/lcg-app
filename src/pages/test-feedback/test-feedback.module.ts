import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestFeedbackPage } from './test-feedback';
import { RatingModule } from "ngx-rating";
@NgModule({
  declarations: [
    TestFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(TestFeedbackPage),
    RatingModule
  ],
})
export class TestFeedbackPageModule {}
