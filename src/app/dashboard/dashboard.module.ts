import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { MassgeToUserComponent } from '../massge-to-user/massge-to-user.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopUpForImageComponent } from '../pop-up-for-image/pop-up-for-image.component';
import { InfoComponent } from '../info/info.component';
import { SmartCardComponent } from '../shared/smart-card/smart-card.component';
import { SmartTableComponent } from '../shared/smart-table/smart-table.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { MyPersonalDetailsComponent } from '../my-personal-details/my-personal-details.component';


@NgModule({
    declarations: [
        PopUpComponent,
        MassgeToUserComponent,
        PopUpForImageComponent,
        InfoComponent,
        SmartCardComponent,
        SmartTableComponent,
        MyProjectsComponent,
        MyPersonalDetailsComponent,
],

    imports: [
        CommonModule,
        HttpClientModule,
        DashboardRoutingModule,
        // ReactiveFormsModule,
        FormsModule,
        // NgbModule,
        // ClickOutsideModule,
        AutocompleteLibModule,
        NgxPaginationModule,
    ],
    providers: [],
    bootstrap: []

})
export class DashboardModule { }
