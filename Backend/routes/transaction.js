const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Transaction route');
});

module.exports = router;








// const router = require('express').Router

// router.get('/', (req, res) => { 
//     res.send('Hello World')
// })

// module.exports = router