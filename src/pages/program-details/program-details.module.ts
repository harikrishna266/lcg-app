import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramDetailsPage } from './program-details';

@NgModule({
  declarations: [
    ProgramDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramDetailsPage),
  ],
})
export class ProgramDetailsPageModule {}
