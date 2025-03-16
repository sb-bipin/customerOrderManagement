import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { //lazy load customer component
        path: 'customer',
        loadChildren: () => import('./pages/customer/customer.routes').then(m => m.customer_routes)
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'feedback',
        loadComponent: () => import('./pages/feedback/feedback.component').then(m => m.FeedbackComponent)
    },
    {
        path: 'reviews',
        loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
    { path: '**', redirectTo: '/home', pathMatch: 'full' },  //if path dont match any route, redirect to home
];

// load all module on start of appplication
export const AppRoutingModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
