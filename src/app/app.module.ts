import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertModule } from './_alert';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { MultiAlertsComponent, MultiAlertsSectionComponent } from './multi-alerts';

@NgModule({
    imports: [
        BrowserModule,
        AlertModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MultiAlertsComponent,
        MultiAlertsSectionComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }