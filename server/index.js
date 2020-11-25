// server
const express = require('express');
const app = express();
const { tryCatch } = require('../helpers');
require('dotenv').config();

// Middlewares
app.use(require('cors')());
app.use(require('compression')()); // gzip
app.use(express.json()); // parse json requests
app.disable('x-powered-by'); // express watermark
tryCatch(() => app.use(require('response-time')()), 'response-time not loaded'); // to measure server response time

// Routing
app.use('/', require('./routes'));

const port = process.env.REACT_APP_BACKEND_PORT || 3002;
app.listen(port, () => console.log(`Port: ${port}`));
