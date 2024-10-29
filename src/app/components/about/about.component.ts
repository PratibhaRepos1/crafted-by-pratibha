import { Component, OnInit  } from '@angular/core';
import { AboutService  } from '../../services/about.service';
import { About } from '../../models/about';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit  {
  aboutData: About | undefined; // Use AboutData to store the data directly

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }

  private loadAboutData(): void {
    this.aboutService.getAbout().subscribe((data: About) => {
      this.aboutData = data; // Assign the entire data object
    });
  }
}
