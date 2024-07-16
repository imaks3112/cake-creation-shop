import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CakeListComponent } from './components/cake-list/cake-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { authGuard } from './guard/auth.guard';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'birthday', component: CakeListComponent },
      { path: 'chocolate', component: CakeListComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
