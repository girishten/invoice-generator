import { Component } from '@angular/core';

@Component({
  selector: 'app-ig-get-started',
  imports: [],
  templateUrl: './ig-get-started.component.html',
  styleUrl: './ig-get-started.component.scss'
})
export class IgGetStartedComponent {

  printComponent(): void {
    window.print();
  }
}
