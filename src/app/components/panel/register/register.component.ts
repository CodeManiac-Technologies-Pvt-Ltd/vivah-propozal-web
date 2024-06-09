import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/interfaces/gender';
import { MartialStatus } from 'src/app/interfaces/martial-status';
import { MotherTongue } from 'src/app/interfaces/mother-tongue';
import { Religion } from 'src/app/interfaces/religion';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isSubmitted: Boolean = false;
  genderList: Gender[] = [];
  maritialStatus: MartialStatus[] = [];
  motherTongueList: MotherTongue[] = [];
  religionList: Religion[] = [];
  casteList: Religion[] = [];
  subCasteList: Religion[] = [];
  stateList: Religion[] = [];
  cityList:Religion[] = [];
  countryList:Religion[] = [];
  occupationList: Religion[] = [];
  subOccupationList: Religion[] = [];
  educationList: Religion[] = [];
  familyValuesList: Religion[] = [];
  familyStatusList: Religion[] = [];
  familyTypeList: Religion[] = [];

  form_register: FormGroup = this.fb.group({
    txt_username: ["", Validators.required],
    txt_email: ["", Validators.required],
    txt_password:["", Validators.required],
    txt_repassword:["", Validators.required],
    txt_full_name:["", Validators.required],
    select_gender:["", Validators.required],
    date_of_birth:["", Validators.required],
    time_of_birth: ["", Validators.required],
    birth_place:[""],
    marital_status:["",Validators.required],
    no_of_child:["", Validators.required],
    mother_tongue:["", Validators.required],
    religion: ["", Validators.required],
    caste: ["", Validators.required],
    sub_caste:["", Validators.required],
    height: ["", Validators.required],
    weight: ["", Validators.required],
    blood_group:[""],
    complexion: ["", Validators.required],
    body_type: ["", Validators.required],
    manglik: [""],
    gothram: [""],
    rashi: [""],
    eating_habits: ["", Validators.required],
    drinking_habits: ["", Validators.required],
    smoking_habits: ["", Validators.required],
    physical_disability:[""],
    disability_details:[""],
    about_myself: ["", Validators.required],
    state: ["", Validators.required],
    district: ["", Validators.required],
    city: ["", Validators.required],
    current_address: ["", Validators.required],
    pincode: ["", Validators.required],
    mobile_number1: ["", Validators.required],
    phone_number: [""],
    mobile_number2:[""],
    ancestral_state: ["", Validators.required],
    ancestral_district: ["", Validators.required],
    ancestral_city: ["", Validators.required],
    ancestral_address: [""],
    nri_country: [""],
    nri_address: [""],
    education: ["", Validators.required],
    qualification: ["", Validators.required],
    more_info: ["", Validators.required],
    occupation: ["", Validators.required],
    sub_occupation: ["", Validators.required],
    employed_in: ["", Validators.required],
    annual_income: ["", Validators.required],
    family_values: ["", Validators.required],
    family_types: ["", Validators.required],
    family_status: ["", Validators.required],
    father_name: ["", Validators.required],
    father_occupation: ["", Validators.required],
    mother_name: ["", Validators.required],
    mothers_occupation: ["", Validators.required],
    no_of_brothers:["", Validators.required],
    married_brothers:["", Validators.required],
    no_of_sisters: ["", Validators.required],
    married_sisters:["", Validators.required],
    surname_relatives: ["", Validators.required],
    additionl_details: ["", Validators.required],
    age_from: ["", Validators.required],
    age_to: ["", Validators.required],
    height_from: ["", Validators.required],
    height_to: ["", Validators.required],
    married_status: ["", Validators.required],
    pref_mother_tongue: ["", Validators.required],
    pref_physical_disable: [""],
    pref_eating_habits: [""],
    pref_smoking_habits: [""],
    pref_driking_habits: [""],
    pref_child: [""],
    about_patner:[""],
    pref_religiion:["", Validators.required],
    pref_caste: ["", Validators.required],
    pref_sub_caste: [""],
    pref_star: [""],
    pref_manglik: [""],
    pref_eduation: [""],
    pref_occupation: [""],
    annual_income_from: [""],
    annual_income_to: [""],
    photo1: [null],
    photo2: [null],
    photo3: [null],
    aadhar_number: [""],
    aadhar_photo: [null]
  });
  constructor( private fb: FormBuilder) {}
  get form_register_controls() {
    return this.form_register.controls;
  }
  on_register_submit({valid, value}: any) {}
}
