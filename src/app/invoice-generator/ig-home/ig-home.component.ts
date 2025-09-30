import { Component } from '@angular/core';
import {IgNavbarComponent} from '../ig-navbar/ig-navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-ig-home',
  imports: [IgNavbarComponent, RouterOutlet],
  templateUrl: './ig-home.component.html',
  styleUrl: './ig-home.component.scss'
})
export class IgHomeComponent {

}
