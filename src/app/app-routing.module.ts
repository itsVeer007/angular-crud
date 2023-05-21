import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'users/admin', pathMatch: 'full'},
  {path: 'users/admin', component: UserManagerComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/edit/:userId', component: EditUserComponent},
  {path: 'users/view/:userId', component: ViewUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
