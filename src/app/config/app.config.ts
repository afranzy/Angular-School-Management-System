import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {
    apiUrl: string;
    clientSecret: string;
    clientId: string;
    grantType: string;
    constructor() {
        this.grantType = 'password';
        this.apiUrl = 'http://127.0.0.1:1234';
        this.clientSecret = 'VxyKc8YkIfrvaZOFO2gnuSxEUIzRJCZ9nXwkZD27';
        this.clientId = '2';
        // this.apiUrl = 'http://127.0.0.1:1000';
    }
}
