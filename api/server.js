const express = require('express');
const server = express();

const heroRouter = require('../heroes/heroRouter');

server.use('/api/heroes', heroRouter);

server.get('/', (req, res) => {
    res.send('Sanity == Good');
});

module.exports = server;