import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSubmitted: Boolean = false;
  login_form: FormGroup = this.fb.group({
    login_user: ["", Validators.required],
    login_pass: ["", Validators.required]
  })
  constructor(private fb: FormBuilder){}

  get login_form_controls() {
    return this.login_form.controls;
  }

  onSubmit({valid, value}: any) {
  }
}
