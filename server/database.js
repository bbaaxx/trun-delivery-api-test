import Camo from 'camo';


var connect = Camo.connect;
async function connectDb(uri) {
  return await connect(uri)
};
var dbUri = 'nedb://.nedb';
const database = connectDb(dbUri, {corruptAlertThreshold: 1});

export default database;