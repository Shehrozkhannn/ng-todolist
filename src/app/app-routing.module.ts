import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersnameComponent } from './usersname/usersname.component';

const routes: Routes = [{
  path: 'users', component: UsersnameComponent
}, {
  path: '', redirectTo: 'users', pathMatch: 'full'
}, {
  path: 'user-details', component: UserdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
