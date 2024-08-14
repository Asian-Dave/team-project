import { Component } from '@angular/core';
import { icustomer } from '../iproducts';
import { customer } from '../products';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers:icustomer[] = customer;
}
