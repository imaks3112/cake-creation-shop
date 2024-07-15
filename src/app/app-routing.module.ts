import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CakeListComponent } from './components/cake-list/cake-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', component: NavbarComponent, 
    children: [
      {path: '', component: HomeComponent},
      {path: 'birthday', component: CakeListComponent},
      {path: 'chocolate', component: CakeListComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
