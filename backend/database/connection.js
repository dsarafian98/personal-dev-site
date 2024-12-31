import {MongoClient, ServerApiVersion} from 'mongodb';
import mongoose from 'mongoose';

const uri = process.env.ATLAS_URI || '';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let db = null;

class Connection {
  static async open() {
    console.log('starting connection');

    await client.connect();
    await this.listDatabases(client);
    let myDb = await client.db('ConcertTracker');
    return myDb;
  }

  static async listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  }

  static async close() {
    await client.close();
  }
}

Connection.db = db;
Connection.uri = uri;
Connection.client = client;
export default Connection;
