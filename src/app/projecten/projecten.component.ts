import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projecten',
  standalone: true,
  imports: [],
  templateUrl: './projecten.component.html',
  styleUrl: './projecten.component.css'
})
export class ProjectenComponent {
  constructor(
      private router: Router
    ) {}

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
