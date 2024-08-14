import { Component } from '@angular/core';
import { iproducts } from '../iproducts';
import { items } from '../products';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  itmes: iproducts[] = items;
}
