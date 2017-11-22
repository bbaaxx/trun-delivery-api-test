import { EmbeddedDocument } from 'camo';

export default class Location extends EmbeddedDocument {
  constructor() {
    super();
    this.lat = Number;
    this.lng = Number;
  }
}
