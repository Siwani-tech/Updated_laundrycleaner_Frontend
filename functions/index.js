const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");

const stripe = require("stripe")(
    "sk_test_51KnlXESGUAxa4Zvuz9Hx1ooXSLTg2OgW6gF39r5BCpnZ3O0EDGfaIWoagwaTUIIeHlJ1M1CKQBj31HsPO5ecWmyz00SwIBHUCD"
  );

  // API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

//http://localhost:5001/llaundry-4d372/us-central1/api

// exports.api=functions.https.onRequest(app);

app.post("/payments/create", async (request, response) =>{
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint