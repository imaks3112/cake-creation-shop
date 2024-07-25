import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CakeListService {
    constructor(private http: HttpClient) {}
    
    getAllBirthdayCakeList(): Observable<any> {
        const url = "http://localhost:3000/birthday";

        try {
            return this.http.get(url);
        } catch (error) {
            throw (error)
        }
    }

    getAllOccasionCakeList(): Observable<any> {
        const url = "http://localhost:3000/occasion";
        
        try {
            return this.http.get(url);
        } catch (error) {
            throw (error)
        }
    }

    getAllBestSellersCakeList(): Observable<any> {
        const url = "http://localhost:3000/best_sellers";
        
        try {
            return this.http.get(url);
        } catch (error) {
            throw (error)
        }
    }

    getAllBakeryCakeList(): Observable<any> {
        const url = "http://localhost:3000/bakery";
        
        try {
            return this.http.get(url);
        } catch (error) {
            throw (error)
        }
    }

    getAllChocolatesCakeList(): Observable<any> {
        const url = "http://localhost:3000/chocolates";
        
        try {
            return this.http.get(url);
        } catch (error) {
            throw (error)
        }
    }

}