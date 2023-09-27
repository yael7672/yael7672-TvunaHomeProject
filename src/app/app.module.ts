import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
//  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    AppRoutingModule,
    // NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
