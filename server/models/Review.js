import { EmbeddedDocument } from 'camo';

export default class Review extends EmbeddedDocument {
  constructor() {
    super();
    this.name = String;
    this.review = String;
    this.rating = {
      type: Number,
      default: 1,
      min: 1,
      max: 5
    };
  }
}
