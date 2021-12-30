import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeMgnt';
  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required ,Validators.minLength(6)]),
    // cpassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });
  // Submit() {
  //   console.log(
  //     'USERNAME :  ' +
  //       this.loginform.controls['username'].value +
  //       ' ' +
  //       'PASSWORD : ' +
  //       this.loginform.controls['password'].value
  //   );
    // alert(
    //   'USERNAME :  ' +
    //     this.loginform.controls['username'].value + " "+" && "+
    //     "Form submitted Sucessfully"
    // );
  }
  // reseter() {
  //   this.loginform.reset();
  // }

