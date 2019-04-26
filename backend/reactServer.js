const express = require('express');
const path = require('path');
const app = express();
const pathToReactApp = '../frontend/';

app.use(express.static(path.join(pathToReactApp, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(pathToReactApp, 'build', 'index.html'));
});

app.listen(9000);