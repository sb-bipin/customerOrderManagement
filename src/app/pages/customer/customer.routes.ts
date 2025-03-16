import { Routes } from '@angular/router';

export const customer_routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./customer.component').then(m => m.CustomerComponent),
        children: [
            { path: 'add-order', loadComponent: () => import('./add-order/add-order.component').then(m => m.AddOrderComponent) },
            { path: 'view-order', loadComponent: () => import('./view-order/view-order.component').then(m => m.ViewOrderComponent) },
        ],
    },
];
