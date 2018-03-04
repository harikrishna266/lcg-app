import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionsPage } from './sessions';
import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    SessionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionsPage),
    RatingModule
  ],
})
export class SessionsPageModule {}
