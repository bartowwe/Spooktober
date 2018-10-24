const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

// I don't think I'm going to need a database for my personal site
//const connection = require('../Database/mongodb/index');

// I also don't know if I'm going to need a router yet
//const router = require('./router');

const server = express();
const port = 3000;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true}));
server.use(express.static(path.join(__dirname, '../client/dist')));

//server.use('/api', router);

server.listen(port, () => console.log('server is connected'));