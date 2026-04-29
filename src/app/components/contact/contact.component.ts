import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css']
})
export class ContactComponent  {
  emailMe: string = 'pratibhajobs10@gmail.com';
  emailPersonal: string = 'pratibha.jadhav3229@gmail.com';
}
