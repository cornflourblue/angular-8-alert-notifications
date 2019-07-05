import { Component } from '@angular/core';

import { AlertService } from '../_alert';

@Component({ templateUrl: 'multi-alerts.component.html' })
export class MultiAlertsComponent {
    constructor(private alertService: AlertService) { }

    success(message: string, alertId: string) {
        this.alertService.success(message, alertId);
    }

    error(message: string, alertId: string) {
        this.alertService.error(message, alertId);
    }

    info(message: string, alertId: string) {
        this.alertService.info(message, alertId);
    }

    warn(message: string, alertId: string) {
        this.alertService.warn(message, alertId);
    }

    clear(alertId: string) {
        this.alertService.clear(alertId);
    }
}