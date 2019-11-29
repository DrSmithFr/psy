import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {StateService} from './state.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterationModel} from '../../../../models/api/registeration.model';
import {ConnectionModel} from '../../../../models/api/connection.model';

// contain every api call to be easily fake using angular provider mechanism
@Injectable(
    {
        providedIn: 'root'
    }
)
export class ApiService {
    readonly API_URL = environment.api_url;

    constructor(
        protected state: StateService,
        protected http: HttpClient
    ) {
    }

    register(password: string): Observable<RegisterationModel> {
        return this.http.post<RegisterationModel>(
            this.API_URL + '/users/register',
            {password}
        );
    }

    connect(username: string, password: string): Observable<ConnectionModel> {
        return this.http.post<ConnectionModel>(
            this.API_URL + '/users/connect',
            {username, password}
        );
    }
}
