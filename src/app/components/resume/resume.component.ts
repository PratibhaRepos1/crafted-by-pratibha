import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Experience, Education, professionalSkills, Languages, Certification } from '../../models/resume';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { resume_pdf } from '../../../environment';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  experience: Experience[] = [];
  education: Education[] = [];
  professionalSkill: professionalSkills[] = [];
  language: Languages[] = [];
  certifications: Certification[] = [];

  constructor(private resumeService: ResumeService){}

  ngOnInit(): void {
    this.loadExperienceData();
    this.loadEducationData();
    this.loadprofessionalSkillData();
    this.loadlanguageData();
    this.loadCertificationsData();
  }

  private loadExperienceData(): void {
    this.resumeService.getExperience().subscribe((experiences: Experience[]) => {
      this.experience = experiences;
    });
  }

  private loadEducationData(): void {
    this.resumeService.getEducation().subscribe((educations: Education[]) => {
      this.education = educations;
    });
  }

  private loadprofessionalSkillData(): void {
    this.resumeService.getProfessionalSkills().subscribe((professionalSkills: professionalSkills[]) => {
      this.professionalSkill = professionalSkills;
    });
  }

  private loadlanguageData(): void {
    this.resumeService.getLanguages().subscribe((languages: Languages[]) => {
      this.language = languages;
    });
  }

  private loadCertificationsData(): void {
    this.resumeService.getCertifications().subscribe((certifications: Certification[]) => {
      this.certifications = certifications;
    });
  }

  downloadResume() {
    const resumeUrl = 'https://pratibharepos1.github.io/crafted-by-pratibha/assets/data/Pratibha_Jadhav_Angular_AI_Developer.pdf';
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = resume_pdf;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
