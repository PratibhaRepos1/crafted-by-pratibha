import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Experience, Education, professionalSkills, Languages } from "../models/resume";
@Injectable({
    providedIn: 'root'
})

export class ResumeService {
    private readonly RESUME_URL = '../../../assets/data/resume.json';

    constructor(private http: HttpClient){}

    getExperience(): Observable<Experience[]>{
        return this.http.get<{experience: Experience[]}>(this.RESUME_URL).pipe(
            map(response => response.experience || []),
            catchError(error => {
                console.error('Error fetching resume data:', error);
                return of([]); // Use the default factory function
            })
        );
    }

     // New function to fetch education data
     getEducation(): Observable<Education[]> {
        return this.http.get<{ education: Education[] }>(this.RESUME_URL).pipe(
            map(response => response.education || []),
            catchError(error => {
                console.error('Error fetching education data:', error);
                return of([]); // Use the default factory function
            })
        );
    }

    // New function to fetch professional skills data
    getProfessionalSkills(): Observable<professionalSkills[]> {
        return this.http.get<{ professionalSkills: professionalSkills[] }>(this.RESUME_URL).pipe(
            map(response => response.professionalSkills || []),
            catchError(error => {
                console.error('Error fetching professional skill data:', error);
                return of([]); // Use the default factory function
            })
        );
    }

    // New function to fetch language  data
    getLanguages(): Observable<Languages []> {
        return this.http.get<{ languages: Languages[] }>(this.RESUME_URL).pipe(
            map(response => response.languages || []),
            catchError(error => {
                console.error('Error fetching professional skill data:', error);
                return of([]); // Use the default factory function
            })
        );
    }
}