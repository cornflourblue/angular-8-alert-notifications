import { Component } from '@angular/core';

import { AlertService } from '../_alert';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    options = {
        autoClose: false,
        keepAfterRouteChange: false
    };

    constructor(protected alertService: AlertService) { }
}