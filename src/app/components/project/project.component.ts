import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
