import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './components/hompage/hompage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { RegisterComponent } from './components/panel/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatInputModule } from '@angular/material/input'
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SearchComponent } from './components/panel/search/search.component';
import { LoginComponent } from './components/panel/login/login.component';
import { ProfilelistComponent } from './components/user/profilelist/profilelist.component';
import { ViewComponent as ProfileViewComponent } from './components/profile/view/view.component';
import { SubscriptionlistComponent } from './components/user/subscriptionlist/subscriptionlist.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    ContactComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    SearchComponent,
    LoginComponent,
    ProfilelistComponent,
    ProfileViewComponent,
    SubscriptionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
