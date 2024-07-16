import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/private/login/login.component';
import { CakeListComponent } from './shared/components/cake-list/cake-list.component';
import { NavbarComponent } from './shared/private/navbar/navbar.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './shared/private/register/register.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { OccasionsComponent } from './components/occasions/occasions.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { ChocolateComponent } from './components/chocolate/chocolate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CakeListComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    RegisterComponent,
    BirthdayComponent,
    OccasionsComponent,
    BestSellersComponent,
    BakeryComponent,
    ChocolateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbTooltipModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
