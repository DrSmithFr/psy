import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../../environments/environment';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoggerService {
    constructor(
        private snackBar: MatSnackBar
    ) {
    }

    debug(message: string): void {
        this.log('Debug: ' + message, 10000);
    }

    log(message: string, duration: number = 2500): void {
        if (environment.developer) {
            this.snackBar.open(message, null, {duration});
        }
    }

    error(message: string): void {
        this.log('Error: ' + message, 10000);
    }
}
