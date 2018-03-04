import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { PagingPipe } from '../../pipes/paging.pipe';
@NgModule({
  declarations: [
    TestPage,
    PagingPipe
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
  ],
})
export class TestPageModule {}
