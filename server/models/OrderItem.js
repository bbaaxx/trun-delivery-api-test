import { EmbeddedDocument } from 'camo';
import Meal from './Meal';

export default class OrderItem extends EmbeddedDocument {
  constructor() {
    super();
    this.meal = Meal;
    this.total = Number;
    this.amount = Number;
  }
}

