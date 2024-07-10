import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// importProvidersFrom to use in-memory web api on a standalone component
// HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        delay: 2000,
      })
    ),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
