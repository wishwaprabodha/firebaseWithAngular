import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent/*, canActivate: [AuthGuard]*/ },
{ path: 'register', component: RegisterComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'user', component: UserComponent/*,  resolve: { data: UserResolver}}*/}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
