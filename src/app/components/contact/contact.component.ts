import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import emailjs from '@emailjs/browser';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css']
})
export class ContactComponent  {

emailMe:string = 'pratibhajobs10@gmail.com';
emailPersonal:string = 'pratibha.jadhav3229@gmail.com';

 
}
