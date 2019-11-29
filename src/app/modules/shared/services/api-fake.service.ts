import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {RegisterationModel} from '../../../../models/api/registeration.model';
import {ConnectionModel} from '../../../../models/api/connection.model';

// fake service use to replace the real ApiService during development
@Injectable(
    {
        providedIn: 'root'
    }
)
export class ApiFakeService extends ApiService {

    private returnWithDelay<T>(data: T, milliseconds: number = null): Observable<T> {
        if (milliseconds === null) {
            // mimic API random slowness
            milliseconds = Math.floor(Math.random() * 400) + 100;
        }

        return new Observable<T>(observer => {
            setTimeout(
                () => {
                    // tslint:disable-next-line:no-console
                    console.info(data);
                    observer.next(data);
                    observer.complete();
                },
                milliseconds
            );
        });
    }

    register(password: string): Observable<RegisterationModel> {
        const registration    = new RegisterationModel();
        registration.username = 'fake-uuid-for-developpement';
        return this.returnWithDelay(registration);
    }

    connect(username: string, password: string): Observable<ConnectionModel> {
        const connection = new ConnectionModel();
        connection.token = 'fake-token-for-developpement';
        return this.returnWithDelay(connection);
    }
}
