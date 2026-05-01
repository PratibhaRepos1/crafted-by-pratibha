import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Experience, Education, professionalSkills, Languages, Certification, AiPortfolioItem } from "../models/resume";
@Injectable({
    providedIn: 'root'
})

export class ResumeService {
    private readonly RESUME_URL = 'https://pratibharepos1.github.io/crafted-by-pratibha/assets/data/resume.json';

    //for local
   // private readonly RESUME_URL = '../../assets/data/resume.json';

    constructor(private http: HttpClient){}

    getAiDevelopmentPortfolio(): Observable<AiPortfolioItem[]> {
        return this.http.get<{ aiDevelopmentPortfolio: AiPortfolioItem[] }>(this.RESUME_URL).pipe(
            map(response => response.aiDevelopmentPortfolio || []),
            catchError(error => {
                console.error('Error fetching AI development portfolio data:', error);
                return of([]);
            })
        );
    }

    getExperience(): Observable<Experience[]>{
        return this.http.get<{experience: Experience[]}>(this.RESUME_URL).pipe(
            map(response => response.experience || []),
            catchError(error => {
                console.error('Error fetching resume data:', error);
                return of([]);
            })
        );
    }

    getEducation(): Observable<Education[]> {
        return this.http.get<{ education: Education[] }>(this.RESUME_URL).pipe(
            map(response => response.education || []),
            catchError(error => {
                console.error('Error fetching education data:', error);
                return of([]);
            })
        );
    }

    getProfessionalSkills(): Observable<professionalSkills[]> {
        return this.http.get<{ professionalSkills: professionalSkills[] }>(this.RESUME_URL).pipe(
            map(response => response.professionalSkills || []),
            catchError(error => {
                console.error('Error fetching professional skill data:', error);
                return of([]);
            })
        );
    }

    getLanguages(): Observable<Languages []> {
        return this.http.get<{ languages: Languages[] }>(this.RESUME_URL).pipe(
            map(response => response.languages || []),
            catchError(error => {
                console.error('Error fetching languages data:', error);
                return of([]);
            })
        );
    }

    getCertifications(): Observable<Certification[]> {
        return this.http.get<{ certifications: Certification[] }>(this.RESUME_URL).pipe(
            map(response => response.certifications || []),
            catchError(error => {
                console.error('Error fetching certifications data:', error);
                return of([]);
            })
        );
    }
}
