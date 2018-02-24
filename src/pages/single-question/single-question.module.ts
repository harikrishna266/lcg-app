import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleQuestionPage } from './single-question';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SingleQuestionPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SingleQuestionPage),
 
  ],
})
export class SingleQuestionPageModule {}
