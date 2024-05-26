import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './components/hompage/hompage.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  { path:"", component: HompageComponent },
  { path:"contactUs", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
