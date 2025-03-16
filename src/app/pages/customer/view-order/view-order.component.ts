import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  imports: [CommonModule],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.scss',
  standalone: true,

})
export class ViewOrderComponent implements OnInit {

  cdr = inject(ChangeDetectorRef);

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
      }, {
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
      }];

  selectedOrder: any;
  isModalOpen = false;

  ngOnInit() {
    this.getOrders();
  }


  viewOrderDetails(order: any) {
    const modalElement = document.getElementById('orderDetailsModal');
    if (modalElement) {
      this.selectedOrder = order;
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();  // Show the modal
    } else {
      console.error('Modal element not found');
    }
  }

  closeModal() {
    const modalElement = document.getElementById('orderDetailsModal');
    if (modalElement) {
      this.selectedOrder = null;
      modalElement.classList.remove('show');  // Remove 'show' class
      modalElement.style.display = 'none';  // Hide the modal using style
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();  // Remove the backdrop
      }
      this.cdr.detectChanges();  // Manually trigger change detection if needed
    }
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
