import { EmbeddedDocument } from 'camo';

export default class Meal extends EmbeddedDocument {
  constructor() {
    super();
    this.name = String;
    this.description = String;
    this.price = Number;
  }
}
