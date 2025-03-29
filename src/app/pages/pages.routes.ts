import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { customer_routes } from './customer/customer.routes';

export const pages_routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'customer',
        loadComponent: () => import('./customer/customer.component').then(m => m.CustomerComponent),
        children: customer_routes
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'feedback',
        loadComponent: () => import('./feedback/feedback.component').then(m => m.FeedbackComponent)
    },
    {
        path: 'reviews',
        loadComponent: () => import('./reviews/reviews.component').then(m => m.ReviewsComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
    { path: '**', redirectTo: '/home', pathMatch: 'full' },  //if path dont match any route, redirect to home
];

