import { Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { CustomerComponent } from './customer.component';

export const customer_routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            { path: '', redirectTo: 'add-order', pathMatch: 'full' },
            { path: 'add-order', component: AddOrderComponent },
            { path: 'view-order', component: ViewOrderComponent },
        ],
    },
];
