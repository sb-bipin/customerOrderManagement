import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';


const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{lightBlue.50}',
      100: '{lightBlue.100}',
      200: '{lightBlue.200}',
      300: '{lightBlue.300}',
      400: '{lightBlue.400}',
      500: '{lightBlue.500}',
      600: '{lightBlue.600}',
      700: '{lightBlue.700}',
      800: '{lightBlue.800}',
      900: '{lightBlue.900}',
      950: '{lightBlue.950}'
    },
    background: {
      surface: '#ffffff',
      overlay: '#e5f6ff',
    },
    text: {
      primary: '#1e3a8a',
      secondary: '#4b6d9d'
    }
  }
});
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false || 'none'
        }
      }
    })
  ]
};