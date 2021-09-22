const express = require('express');
const app = express();
const routes = require('./routes/routes');

// Middlewares
app.use(express.urlencoded({ extended: false} ));
app.use(express.json()); 

// Routes
app.use('/exercise', routes);

module.exports = app;