import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { About, getDefaultAbout } from "../models/about";
@Injectable({
    providedIn: 'root'
})

export class AboutService {
    private readonly ABOUT_ME_URL = 'https://pratibharepos1.github.io/crafted-by-pratibha/assets/data/about-me.json';

    //for local
    //private readonly ABOUT_ME_URL = '../../assets/data/about-me.json';

    constructor(private http: HttpClient){}
    getAbout(): Observable<About>{
        return this.http.get<About>(this.ABOUT_ME_URL).pipe(
            catchError(error => {
                console.error('Error fetching about data:', error);
                return of(getDefaultAbout()); // Use the default factory function
            })
        );
    }
}


