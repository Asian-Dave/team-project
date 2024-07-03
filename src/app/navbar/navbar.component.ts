import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isHomePage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.urlAfterRedirects === '/';
        if (this.isHomePage) {
          // Check the current scroll position and set isScrolled accordingly
          const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          this.isScrolled = offset > 57;
        } else {
          // Ensure the navbar has the scrolled color on non-homepages
          this.isScrolled = true;
        }
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isHomePage) {
      const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrolled = offset > 57;
    }
  }
}
