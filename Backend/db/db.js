const mongoose = require('mongoose');


// Connect to MongoDB and start the server
// const uri = process.env.MONGO_URL;

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
}


module.exports = {db} 