import { Component, OnInit  } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit  {
  aboutMe: string | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ aboutMe: string }>('../../../assets/data/about-me.json').subscribe(data => {
      this.aboutMe = data.aboutMe;
    });
  }
}
