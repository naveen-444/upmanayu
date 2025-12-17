import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
// import { MainLayout } from './app/layout/main-layout/main-layout.component';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
