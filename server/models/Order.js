import { Document } from 'camo';
import Location from './Location';
import OrderItem from './OrderItem';

export default class Order extends Document {
  constructor() {
    super();
    
    this.items = [OrderItem];
    this.address = String;
    this.restaurantId = String;
    this.totalCost = Number;
    this.eta = Number;
    this.Location = Location;
  }
}
