const express = require('express'),
  path = require('path'),
  app = express();


const router = require('./router');

app.set('port', 8777);

app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);

const server = app.listen(app.get('port'), function () {
  console.log('Front End Best Practices App is running on:' + app.get('port'));
});
