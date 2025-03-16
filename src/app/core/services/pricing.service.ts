import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PricingService {

    private apiUrl = 'http://localhost:4200/'; // Replace with your actual API URL

    http = inject(HttpClient);
    // Fetch snack prices
    getSnacks(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/snacks`);
    }

    // Fetch drink prices
    getDrinks(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/drinks`);
    }

    // Fetch dessert prices
    getDesserts(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/desserts`);
    }
}
