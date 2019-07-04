import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { AlertComponent } from './_components';
import { AlertService } from './_services';
import { HomeComponent } from './home';
import { MultiAlertsComponent, MultiAlertsSectionComponent } from './multi-alerts';

@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        MultiAlertsComponent,
        MultiAlertsSectionComponent
    ],
    providers: [
        AlertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }