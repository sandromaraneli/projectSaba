import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  constructor() { }

  getShoes() {
    return [
      {
        id: 1,
        name: 'Men’s Green Running',
        brand: 'Nike',
        size: 10,
        color: 'Black',
        price:  89.90,
        imageUrl: 'assets/images/BestSeller1.jpg',
        rating: 4,
        oldPriceHTML: '<del>$180.00</del>',
        overlayText: 'Sale!'


      },
      {
        id: 2,
        name: 'Men’s Moonstone Sneaker',
        brand: 'Adidas',
        size: 11,
        color: 'Red',
        price: 74.90,
        imageUrl: 'assets/images/BestSeller2.jpg',
        rating: 4

      },
      {
        id: 3,
        name: 'Women’s Choco City Run',
        brand: 'Puma',
        size: 9,
        color: 'White',
        price: 64.00,
        imageUrl: 'assets/images/BestSeller3.jpg',
        rating: 4

      },
      {
        id: 4,
        name: 'Women’s Blue Training',
        brand: 'The North Face',
        size: 12,
        color: 'Brown',
        price: 60.00,
        imageUrl: 'assets/images/BestSeller4.jpg',
        rating: 4,
        oldPriceHTML: '<del>$69.90</del>'


      },
      {
        id: 5,
        name: 'Women’s Cream Suede',
        brand: 'Clarks',
        size: 8,
        color: 'Black',
        price: 59.90,
        imageUrl: 'assets/images/BestSeller5.jpg',
        rating: 4

      },
      {
        id: 6,
        name: 'Sandals',
        brand: 'Women’s Peach Training',
        size: 9,
        color: 'Beige',
        price: 57.90,
        imageUrl: 'assets/images/BestSeller6.jpg',
        rating: 4,
        oldPriceHTML: '<del>$69.90</del>'


      }
    ];
  }
}
