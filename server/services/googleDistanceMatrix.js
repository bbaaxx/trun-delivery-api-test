import rp from 'request-promise-native';
import { URL, URLSearchParams } from 'url';

const API_KEY = process.env.GMAPS_DM_API_KEY;
const baseUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json';
const defaultQs = {
  units: 'metric',
  key: API_KEY
};

export function distanceMatrix(path = '', query = {}, options = {}) {
  const url = new URL(path, baseUrl);
  url.search = new URLSearchParams(Object.assign({}, defaultQs, query));
  return rp(url, options).then(res => JSON.parse(res));
}