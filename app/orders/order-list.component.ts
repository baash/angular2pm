import {Component} from '@angular/core';
import { Order } from './order';

@Component ({
	selector: 'pm-orders',
	moduleId: module.id,
	templateUrl: 'order-list.component.html'
})

export class OrderListComponent {

	pageTitle : string = 'Orders List';
	orders : any[] = [{
    "orderId":1234,"productCode":"GDN-0023","shipDate":"March 18, 2016","price":32.99,"shipAddress":"879 gallon capacity rolling garden cart"},{"orderId":1235,"productCode":"TBX-0048","shipDate":"May 21, 2016","price":8.9,"shipAddress":"234 Some St, Some State, Some Country"}];
  }
    