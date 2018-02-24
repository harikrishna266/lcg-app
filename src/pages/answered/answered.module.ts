import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnsweredPage } from './answered';

@NgModule({
  declarations: [
    AnsweredPage,
  ],
  imports: [
    IonicPageModule.forChild(AnsweredPage),
  ],
})
export class AnsweredPageModule {}
