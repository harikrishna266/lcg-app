import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers//login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public error: any[] = [];

  public registerForm: FormGroup;
  constructor(public navCtrl: NavController,
    public loginSer: LoginProvider,
    public toast: ToastController,
    public fb: FormBuilder,
    public navParams: NavParams) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
    this.error = [];
    this.loginSer.register(this.registerForm.value)
      .map(res => res.json())
      .subscribe(
        (res: any) => {
          if (res.error) {
            for (let i in res.error) {
              this.error.push(res.error[i][0])
            }
          } else {
            this.showTost();
            this.navCtrl.setRoot(LoginPage);
          }
        },
        err => { this.error = err }
      )
  }
  showTost() {
    let toast = this.toast.create({
      message: 'Registration successful, please login',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
