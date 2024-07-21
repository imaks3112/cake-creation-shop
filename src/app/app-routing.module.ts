import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/private/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './shared/private/login/login.component';
import { authGuard } from './guard/auth.guard';
import { RegisterComponent } from './shared/private/register/register.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { ChocolateComponent } from './components/chocolate/chocolate.component';
import { OccasionsComponent } from './components/occasions/occasions.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BakeryComponent } from './components/bakery/bakery.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'birthday', component: BirthdayComponent },
      { path: 'occasions', component: OccasionsComponent },
      { path: 'best-sellers', component: BestSellersComponent },
      { path: 'bakery', component: BakeryComponent },
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
