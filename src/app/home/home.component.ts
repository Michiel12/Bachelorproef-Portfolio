import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  is1Collapsed = false;
  is2Collapsed = true;
  is3Collapsed = true;

  constructor(
    private router: Router
  ) {}
  
  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
