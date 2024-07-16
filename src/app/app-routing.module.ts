import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/private/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './shared/private/login/login.component';
import { authGuard } from './guard/auth.guard';
import { RegisterComponent } from './shared/private/register/register.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { ChocolateComponent } from './components/chocolate/chocolate.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'birthday', component: BirthdayComponent },
      { path: 'chocolate', component: ChocolateComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
