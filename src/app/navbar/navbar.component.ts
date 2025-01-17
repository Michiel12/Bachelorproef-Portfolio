import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activePage: string = "";
  isSmallMenu = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.activePage = this.router.url.split("/")[1];
    });
  }

  navigate(route: string) {
    this.router.navigateByUrl(route).then(() => {
      window.scrollTo(0, 0);
    });
    this.isSmallMenu = false;
  }

  toggleMenu() {
    this.isSmallMenu = !this.isSmallMenu;
  }
}
