import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,NavigationEnd,Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
 standalone: true,
  imports: [CommonModule, RouterModule], // ✅ critical
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
