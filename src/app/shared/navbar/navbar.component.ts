import { Component, OnInit } from '@angular/core';
import { faVk, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faVk = faVk;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit() {
  }

}
