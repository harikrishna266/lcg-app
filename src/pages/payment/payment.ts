import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { ProgramDetailsPage } from '../program-details/program-details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentProvider } from '../../providers/payment';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public pro;
  public MakepaymentForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public loader: LoadingController,
    public payment: PaymentProvider,
    public viewCtrl:ViewController,
    public toast:ToastController,
    public navParams: NavParams,
    public fb: FormBuilder) {
    this.pro = this.navParams.data.data;  
    this.MakepaymentForm = this.fb.group({
      bank: ['', Validators.required],
      trxno: ['', Validators.required],
      amount: ['', Validators.required],
      program_id: [this.pro.id, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
	
	cancel() {
		this.navCtrl.pop();	
  }
  makePayment() {
    let loader  =this.loader.create({
      content: 'Saving payment details...'
    });
    loader.present();

    this.payment.makePayment(this.MakepaymentForm.value)
      .subscribe(res => {
        loader.dismiss();
        this.toast.create({
          message: 'we received your payment, please wait for approval',
          duration: 3000,
          position: 'top'
        }).present();
        this.viewCtrl.dismiss(res);
        
      })
  }
}
