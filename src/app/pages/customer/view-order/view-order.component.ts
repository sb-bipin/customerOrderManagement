import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-view-order',
  imports: [CommonModule, DialogModule],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewOrderComponent implements OnInit {
  isOrderDetailsDialogOpen: boolean = false;
  selectedOrder: any;

  private readonly cdr = inject(ChangeDetectorRef);
  orders: {
    id: number; customerName: string; date: string; status: string; totalAmount: number;
    items: { name: string; quantity: number; price: number; }[];
  }[] = [
      {
        id: 1,
        customerName: 'John Doe',
        date: 'March 16, 2025',
        status: 'Completed',
        totalAmount: 45.50,
        items: [
          { name: 'Chips', quantity: 2, price: 2.50 },
          { name: 'Soda', quantity: 3, price: 1.00 },
          { name: 'Cake', quantity: 1, price: 5.00 },
        ]
      },
      {
        id: 2,
        customerName: 'Jane Doe',
        date: 'March 17, 2025',
        status: 'Pending',
        totalAmount: 25.00,
        items: [
          { name: 'Chips', quantity: 2, price: 2.50 },
          { name: 'Soda', quantity: 3, price: 1.00 },
          { name: 'Cake', quantity: 1, price: 5.00 },
        ]
      }
    ];


  ngOnInit() {
    this.getOrders();
  }

  viewOrderDetailsDialog(order: any) {
    this.selectedOrder = order;
    this.isOrderDetailsDialogOpen = true;
    this.cdr.detectChanges();
  }

  closeOrderDetailsDialog() {
    this.selectedOrder = null;
    this.isOrderDetailsDialogOpen = false;
    this.cdr.detectChanges();
  }

  getOrders() {
    // this.orderService.getOrders().subscribe({
    //   next: (data) => {
    //     this.orders = data;
    //   },
    //   error: (error) => {
    //     console.error('Error getting orders:', error);
    //   }
    // });
  }
}
