const express = require('express');
const allRouter = require('./routes');
const app = express();
app.use(express.json());
app.use('/', allRouter);

require('dotenv').config();
const mongoose = require('mongoose');

const MONGOSE_CONFIG = {useNewUrlParser: true, useUnifiedTopology: true};
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = 5000;

try {
  mongoose.connect(DATABASE_URL, MONGOSE_CONFIG, () =>
    console.log('\u001b[' + 32 + 'm' + 'Mongoose connected : OK' + '\u001b[0m'),
  );
} catch (e) {
  console.log('conn error');
}
const dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log(`Connection error ${err}`));
dbConnection.once('open', () =>
  console.log('\u001b[' + 32 + 'm' + 'Connected to DB: OK' + '\u001b[0m'),
);

app.listen(PORT, () => {
  console.log('initializing');
});
