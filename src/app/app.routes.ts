import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { customer_routes } from './pages/customer/customer.routes';
import { pages_routes } from './pages/pages.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/pages.component').then(m => m.PagesComponent),
        children: pages_routes
    },
    { path: '', redirectTo: 'cos', pathMatch: 'full' }, //default route
    { path: '**', redirectTo: '/cos', pathMatch: 'full' },  //if path dont match any route, redirect to home
];

// load all module on start of appplication
export const AppRoutingModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
