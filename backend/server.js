const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Replica Set Connection String
const url =
  "mongodb://mongodb-0.mongodb-svc:27017,mongodb-1.mongodb-svc:27017/?replicaSet=rs0";

const client = new MongoClient(url);

async function start() {
  await client.connect();

  console.log("Connected to MongoDB Replica Set");

  const db = client.db("codingwale");
  const collection = db.collection("students");

  // Insert Data
  app.get("/add", async (req, res) => {

    const result = await collection.insertOne({
      name: "Aarush",
      age: 25,
      created: new Date()
    });

    res.send(result);
  });

  app.get("/", async (req, res) => {

    const students = await collection.find().toArray();

    res.json(students);
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

start();
