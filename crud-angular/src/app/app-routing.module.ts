import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'list', component: ListComponent},
  {path: 'list/:email', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
