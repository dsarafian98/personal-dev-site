const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is hello world route');
});

module.exports = router;
