import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    ReactiveFormsModule,
    IonicPageModule.forChild(PaymentPage),
  ],
})
export class PaymentPageModule {}
