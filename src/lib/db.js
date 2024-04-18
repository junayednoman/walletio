const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r8yk5up.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const dbName = `${process.env.DB_NAME}`;
let client;
async function connect() {
    try {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('connected to database');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default async function getDb() {
    if (!client || !client.isConnected()) {
        await connect();
    }
    return client.db(dbName);
}