// src/main.ts

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

//Bootstrap the application
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), routes]
}).catch(err => console.error(err));
