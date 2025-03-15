import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'customer',
        loadComponent: () => import('./pages/customer/customer.component').then(m => m.CustomerComponent),
        children: [
            { path: 'add-order', loadComponent: () => import('./pages/customer/add-order/add-order.component').then(m => m.AddOrderComponent) },
            { path: 'view-order', loadComponent: () => import('./pages/customer/view-order/view-order.component').then(m => m.ViewOrderComponent) },
        ]
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    },
    {
        path: 'feedback',
        loadComponent: () => import('./pages/feedback/feedback.component').then(m => m.FeedbackComponent),
    },
    {
        path: 'reviews',
        loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
