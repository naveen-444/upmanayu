// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule,NavigationEnd,Router } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-home',
//  imports: [CommonModule, RouterModule], // ✅ critical
//   templateUrl: './home.html',
//   styleUrl: './home.css'
// })
// export class Home {
//     isHomePage = false;

//   constructor(private router: Router) {
//     this.router.events
//       .pipe(filter(event => event instanceof NavigationEnd))
//       .subscribe((event: NavigationEnd) => {
//         this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
//            window.scrollTo({ top: 0, behavior: 'smooth' });
//       });
//   }

//     hoveredIndex: number | null = null;
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // ✅ use plural "styleUrls"
})
export class Home {
  isHomePage = false;

  hoveredIndex: number | null = null;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }


    isCardVisible = false;
  hideTimeout: any;

  showCard() {
    clearTimeout(this.hideTimeout);
    this.isCardVisible = true;
  }

  hideCard() {
    this.hideTimeout = setTimeout(() => {
      this.isCardVisible = false;
    }, 10); // small delay prevents flicker
  }

 
}
