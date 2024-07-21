import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CakeListService {
    constructor(private http: HttpClient) {}
    
    async getAllBirthdayCakeList(): Promise<any> {
        const url = "https://jsonplaceholder.typicode.com/todos"
        try {
            return await this.http.get(url);
        } catch (error) {
            console.log(error);
        }
    }
}