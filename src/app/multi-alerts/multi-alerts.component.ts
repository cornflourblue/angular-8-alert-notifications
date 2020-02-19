import { Component } from '@angular/core';

import { AlertService } from '../_alert';

@Component({ templateUrl: 'multi-alerts.component.html' })
export class MultiAlertsComponent {
    constructor(protected alertService: AlertService) { }
}