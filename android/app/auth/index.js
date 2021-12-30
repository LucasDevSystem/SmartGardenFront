const express = require("express");
const res = require("express/lib/response");
const app = express();
const allRouter=require('./routes');
const mongoose = require ("mongoose");
app.use(express.json());
app.use('/',allRouter);

require("dotenv").config();



try {
  
  mongoose.connect(
    process.env.DATABASE_URL,
    {useNewUrlParser: true, 

      useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

const port = 5000

app.listen(port,()=>{
    console.log('app inicializado');
})