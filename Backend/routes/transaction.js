const express = require('express');
const { addIncome } = require('../controllers/Income');
const router = express.Router();

// Define your routes here
router.post('/add-income', addIncome)

module.exports = router;








// const router = require('express').Router

// router.get('/', (req, res) => { 
//     res.send('Hello World')
// })

// module.exports = router