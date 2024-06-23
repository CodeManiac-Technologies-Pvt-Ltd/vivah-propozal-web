import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './components/hompage/hompage.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { RegisterComponent } from './components/panel/register/register.component';
import { SearchComponent } from './components/panel/search/search.component';
import { LoginComponent } from './components/panel/login/login.component';
import { ProfilelistComponent } from './components/user/profilelist/profilelist.component';
import { ViewComponent } from './components/profile/view/view.component';
import { SubscriptionlistComponent } from './components/user/subscriptionlist/subscriptionlist.component';

const routes: Routes = [
  { path:"", component: HompageComponent },
  { path:"contactUs", component: ContactComponent },
  { path: "register", component: RegisterComponent},
  { path: "search", component: SearchComponent},
  { path: "login", component: LoginComponent},
  { path: 'profilelist', component: ProfilelistComponent},
  { path: 'viewprofile/:id', component: ViewComponent},
  { path: 'subscibelist', component: SubscriptionlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
