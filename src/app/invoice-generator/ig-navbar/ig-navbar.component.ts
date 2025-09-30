import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-ig-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './ig-navbar.component.html',
  styleUrl: './ig-navbar.component.scss'
})
export class IgNavbarComponent {

  protected readonly Component = Component;
}
