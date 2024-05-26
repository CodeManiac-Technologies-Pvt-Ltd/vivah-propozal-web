import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  form_homepage_login: FormGroup = this.fb.group({
    txt_username: ["", Validators.required],
    txt_password: ["", Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  onLoginSubmit( {valid, value}: any) {}
}
