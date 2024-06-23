import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchForm: FormGroup = this.fb.group({})
  constructor(private fb: FormBuilder, private router: Router){}

  onSubmit({valid, value}: any) {
    this.router.navigateByUrl('/profilelist')
  }

}
