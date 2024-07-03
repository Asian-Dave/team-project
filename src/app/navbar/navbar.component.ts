// navbar.component.ts
import { Component, HostListener, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck{
  isScrolled = false;

  constructor(private route: Router) {
  }

  ngDoCheck(): void {
    console.log(this.route.url);
    if (this.route.url == "/") {
      
    }
  }

 ngOnInit(): void {
   
 }
  
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 57;
  }
}


