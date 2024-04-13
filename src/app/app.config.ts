import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  Facebook, Heart, Instagram, LogOut, LucideAngularModule, Search, ShoppingBag, ShoppingCart, ThumbsDown, ThumbsUp, Youtube } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    importProvidersFrom(LucideAngularModule.pick({ 
      ShoppingBag, 
      ShoppingCart,
      Heart, 
      ThumbsDown,
      ThumbsUp,
      Instagram,
      Facebook, 
      Youtube,
      Search,
      LogOut
    }))
  ]
};
