'use strict';

const express = require('express'),
    app = express(),
    http = require('http').createServer(app);



app.get('/', (req, res) =>{

    res.status(200).send({message: 'Hola mundo'});
});


module.exports = http;
