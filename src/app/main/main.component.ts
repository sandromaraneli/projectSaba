import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] 
})
export class MainComponent implements OnInit {
  imageUrl: string = 'assets/images/background-img.PNG';
  aboutUs: string = 'assets/images/about-shoe.jpg';
  reqUrl: string = 'assets/images/shoes-req.png';
  backgroundImgmen: string ='assets/images/background-man.PNG'
  backgroundImgwomen: string ='assets/images/Background-women.png'
  recoOne: string ='assets/images/reco1.svg'
  recoTwo: string ='assets/images/reco2.svg'
  recoThree: string ='assets/images/reco3.svg'
  recoCricle: string ='assets/images/reco-circle.jpg'
  lockUrl: string ='assets/images/lock-img.svg'
  shippingUrl: string ='assets/images/shipping-img.svg'
  returnUrl: string ='assets/images/return-img.svg'
  customer1: string ='assets/images/customer-img1.jpg'
  customer2: string ='assets/images/customer-img2.jpg'
  customer3: string ='assets/images/customer-img3.jpg'
  logoImages: string[] = [
    'assets/images/logo5.png',
    'assets/images/logo4.png',
    'assets/images/logo3.png',
    'assets/images/logo2.png',
    'assets/images/logo1.png',
  ];
  
  shoes: any[] = [];

  constructor(private shoeService: ShoeService) { }

  ngOnInit(): void {
    this.shoes = this.shoeService.getShoes();
  }
}
