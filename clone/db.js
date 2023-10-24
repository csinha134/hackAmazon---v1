const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://csinha134:fqHDzzkDlpXaocXt@hackon.tviekhk.mongodb.net/'
const dbName = 'HackOn';

const client = new MongoClient(url, { useUnifiedTopology: true });
let database; // Store the database connection

async function connectToDatabase() {
  if (!database) {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      database = client.db(dbName);
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      throw error;
    }
  }
  return database;
}

async function findProducts() {
  const collection = database.collection('myProducts');
  const products = await collection.find({}).toArray();
  console.log(products);
  return products;
}

module.exports = {
  connectToDatabase,
  findProducts,
};
