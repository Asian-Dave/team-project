import { Component, HostListener, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var bootstrap: any; // Declare bootstrap for using CDN

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  isHomePage = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.urlAfterRedirects === '/';
        if (this.isHomePage) {
          const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          this.isScrolled = offset > 57;
        } else {
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

  ngAfterViewInit() {
    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarSupportedContent');
    
    if (menuToggle) {
      const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

      navLinks.forEach((link) => {
        this.renderer.listen(link, 'click', () => {
          if (menuToggle.classList.contains('show')) { // only fire on mobile
            bsCollapse.toggle();
          }
        });
      });
    }
  }
}
