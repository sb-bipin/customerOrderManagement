import { Component, Inject, OnInit } from '@angular/core';
import { PricingService } from '../../core/services/pricing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  snacks = [
    { name: 'Chips', priceHalf: '$2.50', priceFull: '$4.00' },
  ];
  drinks = [
    { name: 'Soda', pricePerPiece: '$1.50' },
  ];
  desserts = [
    { name: 'Chocolate Cake', pricePerPiece: '$3.00' },
  ];

  pricingService = Inject(PricingService);

  ngOnInit() {
    this.getAllSnacks();
    this.getAllDrinks();
    this.getAllDesserts();
  }

  // API Calls to get other pricing data
  getAllSnacks() {
    this.snacks = [...this.snacks];

    // this.pricingService.getSnacks().subscribe((data: any) => {
    //   this.snacks = [...this.snacks, ...data];
    // });
  }

  getAllDrinks() {
    this.drinks = [...this.drinks];

    // this.pricingService.getDrinks().subscribe((data: any) => {
    //   this.drinks = [...this.drinks, ...data];
    // });
  }

  getAllDesserts() {
    this.desserts = [...this.desserts];

    // this.pricingService.getDesserts().subscribe((data: any) => {
    //   this.desserts = [...this.desserts, ...data];
    // });
  }
}
