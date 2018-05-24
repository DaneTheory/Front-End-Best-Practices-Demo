const express = require('express');
const path = require('path');


const router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'client/index.html'));
});

router.get('/optimized', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'client/optimizedVer.html'));
});


module.exports = router;
