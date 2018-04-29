import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
 
import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    TestPage
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    PipesModule
  ],
})
export class TestPageModule {}
