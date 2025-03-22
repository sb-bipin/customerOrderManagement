import { Component, inject, NgModule, OnInit } from '@angular/core';
import { PricingService } from '../../../core/services/pricing.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'app-add-order',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, AutoFocusModule],
  providers: [PricingService],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss',
  standalone: true,
})
export class AddOrderComponent implements OnInit {
  snacks: { name: string; priceHalf: string; priceFull: string; fullQuantity: number; halfQuantity: number; }[] = [
    { name: 'Chips', priceHalf: '$2.50', priceFull: '$4.00', fullQuantity: 1, halfQuantity: 0.5 },
    { name: 'Chips', priceHalf: '$2.50', priceFull: '$4.00', fullQuantity: 1, halfQuantity: 0.5 }
  ];
  drinks: { name: string; pricePerPiece: string; quantity: number; }[] = [
    { name: 'Soda', pricePerPiece: '$1.50', quantity: 0 },
  ];
  desserts: { name: string; pricePerPiece: string; quantity: number; }[] = [
    { name: 'Chocolate Cake', pricePerPiece: '$3.00', quantity: 0 },
  ];

  activeTab: string = 'snacks';

  pricingService = inject(PricingService);

  ngOnInit() {
    this.getAllSnacks();
    this.getAllDrinks();
    this.getAllDesserts();
  }

  getAllSnacks() {
    this.snacks = [...this.snacks];

    // this.pricingService.getSnacks().subscribe({
    //   next: (data) => {
    //     this.snacks = data.map(snack => ({ ...snack, quantity: 0 }));
    //   },
    //   err: (error) => {
    //     console.error('Error getting snacks:', error);
    //   }
    // });
  }

  getAllDrinks() {
    this.drinks = [...this.drinks];

    // this.pricingService.getDrinks().subscribe(
    //   (data) => {
    //     this.drinks = data.map(drink => ({ ...drink, quantity: 0 }));
    //   },
    //   (error) => {
    //     console.error('Error getting drinks:', error);
    //   }
    // );
  }

  getAllDesserts() {
    this.desserts = [...this.desserts];

    // this.pricingService.getDesserts().subscribe(
    //   (data) => {
    //     this.desserts = data.map(dessert => ({ ...dessert, quantity: 0 }));
    //   },
    //   (error) => {
    //     console.error('Error getting desserts:', error);
    //   }
    // );
  }

  submitOrder() {
    // const order = {
    //   snacks: this.snacks.filter(snack => snack.quantity > 0),
    //   drinks: this.drinks.filter(drink => drink.quantity > 0),
    //   desserts: this.desserts.filter(dessert => dessert.quantity > 0),
    // };
    console.log('Order submitted:');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
