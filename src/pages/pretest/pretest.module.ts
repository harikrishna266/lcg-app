import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PretestPage } from './pretest';
import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    PretestPage,
    
  ],
  imports: [
    IonicPageModule.forChild(PretestPage),
    PipesModule
  ],
  exports: [
    PretestPage
  ]
})
export class PretestPageModule {}
