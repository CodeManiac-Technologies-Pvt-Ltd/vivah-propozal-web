import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.scss']
})
export class HompageComponent {
  is_submitted:Boolean = false;
  religion_list = [];
  caste_list = [];
  dropDownSettings: IDropdownSettings= {};
  form_homepage_login: FormGroup = this.fb.group({
    txt_username: ["", Validators.required],
    txt_password: ["", Validators.required]
  });
  form_regular_search: FormGroup = this.fb.group({
    gender: ["1", Validators.required],
    religionDropDown: [this.religion_list],
    casteDropDown: [ this.caste_list]
  })
  form_id_search: FormGroup = this.fb.group({
    profile_id: ["", Validators.required]
  })

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.dropDownSettings = {
      idField: 'id',
      textField: 'text',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Remove All',
      noDataAvailablePlaceholderText:"There is no items available to show",
      allowSearchFilter: true
    }
  }

  get form_hompage_login_controls () {
    return this.form_homepage_login.controls;
  }
  get form_regular_search_controls() {
    return this.form_regular_search.controls
  }
  get form_id_search_controls() {
    return this.form_id_search.controls
  }

  onLoginSubmit( {valid, value}: any) {}

  onRegularSearch( {valid, value}: any) {}

  onIdSearch( {valid, value}: any) {}

  onReligionItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onReligionItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
  }
  onReligionSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  onReligionUnSelectAll() {
    console.log('onUnSelectAll fires');
  }

  onCasteItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onCasteItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
  }
  onCasteSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  onCasteUnSelectAll() {
    console.log('onUnSelectAll fires');
  }
}
