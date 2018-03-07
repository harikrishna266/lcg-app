import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams } from 'ionic-angular';
import { ProgramsPage } from '../programs/programs';
import { LoginProvider } from '../../providers//login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
    public loginSer: LoginProvider,
    public toast: ToastController,
    public fb: FormBuilder,
    public navParams: NavParams) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {

  }
  makelogin() {
    this.loginSer.getAccessToken(this.loginForm.value)
      .map(res => res.json())
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        this.navCtrl.setRoot(ProgramsPage);
        let toast = this.toast.create({
          message: 'You are logged in',
          duration: 3000,
          position: 'top'
        })
        toast.present();

      }, (e) => {
        let toast = this.toast.create({
          message: 'Please check your username and password!',
          duration: 3000,
          position: 'top'
        })
        toast.present();
      })
  }

}
