import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient() , provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};


//provideExperimentalZonelessChangeDetection()  // remove zone base change detection when we provide this in providers
