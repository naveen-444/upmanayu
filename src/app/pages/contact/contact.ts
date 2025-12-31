// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './contact.html',
//   styleUrl: './contact.css'
// })
// export class Contact implements OnInit {

//   isHomePage = false;
//   hoveredIndex: number | null = null;

//   captchaToken: string | null = null;

//   constructor(private router: Router) {
//     this.router.events
//       .pipe(filter(event => event instanceof NavigationEnd))
//       .subscribe((event: NavigationEnd) => {
//         this.isHomePage =
//           event.urlAfterRedirects === '/' ||
//           event.urlAfterRedirects === '/home';

//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       });
//   }

//   ngOnInit(): void {
//     (window as any).onCaptchaSuccess = (token: string) => {
//       this.captchaToken = token;
//       console.log('Captcha verified:', token);
//     };
//   }

//   onSubmit() {
//     if (!this.captchaToken) {
//       alert('Please verify captcha');
//       return;
//     }

//     console.log('Form submitted with captcha');
//   }
// }




import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,          // ✅ required for ngForm / ngModel
    HttpClientModule      // ✅ required for API call
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {

  isHomePage = false;
  hoveredIndex: number | null = null;
  captchaToken: string | null = null;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage =
          event.urlAfterRedirects === '/' ||
          event.urlAfterRedirects === '/home';

        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  ngOnInit(): void {
    (window as any).onCaptchaSuccess = (token: string) => {
      this.captchaToken = token;
      console.log('Captcha verified:', token);
    };
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all required fields');
      return;
    }

    if (!this.captchaToken) {
      alert('Please verify captcha');
      return;
    }

    const payload = {
      ...form.value,
      captcha: this.captchaToken
    };

    this.http.post(
      'https://rental.onavinfosolutions.com/send-mail.php',
      payload
    ).subscribe({
      next: () => {
        alert('Message sent successfully ✅');
        form.resetForm();
        this.captchaToken = null;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to send message ❌');
      }
    });
  }
}


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { FormsModule, NgForm } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   templateUrl: './contact.html',
//   styleUrl: './contact.css'
// })
// export class Contact implements OnInit {

//   isHomePage = false;
//   hoveredIndex: number | null = null;

//   constructor(
//     private router: Router,
//     private http: HttpClient
//   ) {
//     this.router.events
//       .pipe(filter(event => event instanceof NavigationEnd))
//       .subscribe((event: NavigationEnd) => {
//         this.isHomePage =
//           event.urlAfterRedirects === '/' ||
//           event.urlAfterRedirects === '/home';

//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       });
//   }

//   ngOnInit(): void {}

//   onSubmit(form: NgForm) {
//     if (!form.valid) {
//       alert('Please fill all required fields');
//       return;
//     }

//     const payload = {
//       ...form.value
//     };

//     this.http.post(
//       'https://rental.onavinfosolutions.com/send-mail.php',
//       payload
//     ).subscribe({
//       next: () => {
//         alert('Message sent successfully ✅');
//         form.resetForm();
//       },
//       error: (err) => {
//         console.error(err);
//         alert('Failed to send message ❌');
//       }
//     });
//   }
// }
