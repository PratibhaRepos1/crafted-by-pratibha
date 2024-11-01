import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Experience, Education, professionalSkills, Languages } from '../../models/resume';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
 
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  experience: Experience[] = [];
  education: Education[] = [];
  professionalSkill: professionalSkills[] = [];
  language: Languages[] = []; 

  constructor(private resumeService: ResumeService){}

  ngOnInit(): void {
    this.loadExperienceData();
    this.loadEducationData();
    this.loadprofessionalSkillData();
    this.loadlanguageData();

  }

  private loadExperienceData(): void {
    this.resumeService.getExperience().subscribe((experiences: Experience[]) => {
      this.experience = experiences;
      // Using a forEach to log each experience entry
      this.experience.forEach((exp, index) => {
       // console.log(`Experience ${index + 1}: `, exp);
      });
      
    })
  }

  private loadEducationData(): void { // New method to load education data
    this.resumeService.getEducation().subscribe((educations: Education[]) => {
      this.education = educations;
      // Using a forEach to log each education entry
      this.education.forEach((edu, index) => {
        console.log(`Education ${index + 1}: `, edu);
      });
    });
  }

  private loadprofessionalSkillData(): void { // New method to load education data
    this.resumeService.getProfessionalSkills().subscribe((professionalSkills: professionalSkills[]) => {
      this.professionalSkill = professionalSkills;
      // Using a forEach to log each professional skills entry
      this.professionalSkill.forEach((profession, index) => {
        console.log(`Professional Skills ${index + 1}: `, profession);
      });
    });
  }

  private loadlanguageData(): void { // New method to load education data
    this.resumeService.getLanguages().subscribe((languages: Languages []) => {
      this.language = languages;
      // Using a forEach to log each professional skills entry
      this.language.forEach((lang, index) => {
        console.log(`Professional Skills ${index + 1}: `, lang);
      });
    });
  }

}
