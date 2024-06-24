
import { Component, OnInit } from '@angular/core';

interface Shoe {
  name: string;
  price: number;
  gender: 'men' | 'women';
  type: 'running' | 'sneaker' | 'training';
  image: string;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  shoes: Shoe[] = [
    { name: 'Men’s Black Running', price: 79.99, gender: 'men', type: 'running', image: 'assets/images/1.jpg' },
    { name: 'Men’s Classic Blue', price: 69.99, gender: 'men', type: 'sneaker', image: 'assets/images/2.jpg' },
    { name: 'Men’s Classic Mint', price: 79.99, gender: 'men', type: 'sneaker', image: 'assets/images/3.jpg' },
    { name: 'Men’s Earth-Tone Sneaker', price: 74.99, gender: 'men', type: 'sneaker', image: 'assets/images/4.jpg' },
    { name: 'Men’s Green Running', price: 89.99, gender: 'men', type: 'running', image: 'assets/images/5.jpg' },
    { name: 'Men’s Moonstone Sneaker', price: 74.99, gender: 'men', type: 'sneaker', image: 'assets/images/6.jpg' },
    { name: 'Men’s Navy Running', price: 104.99, gender: 'men', type: 'running', image: 'assets/images/7.jpg' },
    { name: 'Men’s Red Running', price: 61.99, gender: 'men', type: 'running', image: 'assets/images/8.jpg' },
    { name: 'Women’s Blue Training', price: 40.99, gender: 'women', type: 'running', image: 'assets/images/21.jpg' },
    { name: 'Women’s Candy City Run', price: 64.99, gender: 'women', type: 'training', image: 'assets/images/10.jpg' },
    { name: 'Women’s Choco City Run', price: 59.99, gender: 'women', type: 'sneaker', image: 'assets/images/11.jpg' },
    { name: 'Women’s Cream Suede', price: 49.99, gender: 'women', type: 'running', image: 'assets/images/12.jpg' },
    { name: 'Women’s Green Training', price: 89.99, gender: 'women', type: 'sneaker', image: 'assets/images/13.jpg' },
    { name: 'Women’s Mint Sneaker', price: 44.99, gender: 'women', type: 'training', image: 'assets/images/14.jpg' },
    { name: 'Women’s Orange Sneaker', price: 57.99, gender: 'women', type: 'sneaker', image: 'assets/images/15.jpg' },
    { name: 'Women’s Peach Training', price: 59.99, gender: 'women', type: 'sneaker', image: 'assets/images/16.jpg' },
    { name: 'Women’s Pink Suede', price: 54.99, gender: 'women', type: 'training', image: 'assets/images/17.jpg' },
    { name: 'Women’s Pink Training', price: 80.99, gender: 'women', type: 'sneaker', image: 'assets/images/18.jpg' },
    { name: 'Women’s Tan Sneaker', price: 64.99, gender: 'women', type: 'training', image: 'assets/images/19.jpg'},
    { name: 'Women’s Tan Sneaker', price: 64.99, gender: 'women', type: 'sneaker', image: 'assets/images/20.jpg'},
  ];

  filteredShoes: Shoe[] = [];
  priceFilter: number | undefined;
  minPriceFilter: number | undefined;
  maxPriceFilter: number | undefined;
  genderFilter: string = '';
  typeFilter: string = '';

  constructor() { }

  ngOnInit(): void {
    this.applyFilters(); 
  }

  applyFilters(): void {
    this.filteredShoes = this.shoes.filter(shoe => {
      let passPrice = true;
      let passGender = true;
      let passType = true;

      if (this.minPriceFilter && shoe.price < this.minPriceFilter) {
        passPrice = false;
      }
      if (this.maxPriceFilter && shoe.price > this.maxPriceFilter) {
        passPrice = false;
      }

      if (this.genderFilter && shoe.gender !== this.genderFilter) {
        passGender = false;
      }

      if (this.typeFilter && shoe.type !== this.typeFilter) {
        passType = false;
      }

      return passPrice && passGender && passType;
    });
  }
}