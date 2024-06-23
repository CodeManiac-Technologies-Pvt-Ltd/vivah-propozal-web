import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './components/hompage/hompage.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { RegisterComponent } from './components/panel/register/register.component';
import { SearchComponent } from './components/panel/search/search.component';

const routes: Routes = [
  { path:"", component: HompageComponent },
  { path:"contactUs", component: ContactComponent },
  { path: "register", component: RegisterComponent},
  { path: "search", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
