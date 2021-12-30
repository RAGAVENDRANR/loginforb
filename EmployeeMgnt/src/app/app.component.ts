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
  });
    Submit() {
      alert(
       'USERNAME :  ' +
         this.loginform.controls['username'].value + " "+" && "+
         "Form submitted Sucessfully"
     );
     this.loginform.reset()
  }
  }
