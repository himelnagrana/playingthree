const express = require('express');
const config = require('config');
const logger = require('./logger');
const ThreePlay = require('./threePlay');

const app = express();
const PORT = config.get('server.port');

app.listen(PORT, (err) => {
  if (err) {
    logger.log('error', `Error starting server: ${err}`);
    return;
  }
  logger.log('info', `server listening on ${PORT}`);
});

app.get('/', function(req, res){
  let tp = new ThreePlay();
  res.send(tp.domElement);
});
