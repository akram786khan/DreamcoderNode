const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://akram:Solanki167@travesycluster0.sg3iqyi.mongodb.net';
const client = new MongoClient(url);

// Database Name
const dbName = 'DreamCoder';

async function db() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return collection;
}
module.exports = db;