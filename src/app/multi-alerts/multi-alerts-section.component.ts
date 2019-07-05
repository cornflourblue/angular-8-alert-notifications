import { Component, Input } from '@angular/core';

import { AlertService } from '../_alert';

@Component({ selector: 'multi-alerts-section', templateUrl: 'multi-alerts-section.component.html' })
export class MultiAlertsSectionComponent {
    @Input() id: string;

    constructor(private alertService: AlertService) { }

    success(message: string) {
        this.alertService.success(message, this.id);
    }

    error(message: string) {
        this.alertService.error(message, this.id);
    }

    info(message: string) {
        this.alertService.info(message, this.id);
    }

    warn(message: string) {
        this.alertService.warn(message, this.id);
    }

    clear() {
        this.alertService.clear(this.id);
    }
}