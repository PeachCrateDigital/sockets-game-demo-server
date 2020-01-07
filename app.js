const express = require('express');

var app = express();

app.get('/', (req, res, next) => {
  res.send('hello world');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
