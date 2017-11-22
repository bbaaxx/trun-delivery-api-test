import { Document } from 'camo';
import Review from './Review';
import Meal from './Meal';
import Location from './Location';

export default class Restaurant extends Document {
  constructor() {
    super();

    this.logo = String;
    this.commercialName = String;
    this.legalName = String;
    this.commercialEmail = { type: String, required: true };
    this.adminNumber = String;
    this.address = String;
    this.rating = { type: Number, default: 1, min: 1, max: 5 };
    this.reviews = [Review];
    this.meals = [Meal];
    this.Location = Location;    
  }

  preSave() {
    this.rating = this.reviews.reduce((rt, rev) => rt += rev.rating, 0) / this.reviews.length;
  }
}
