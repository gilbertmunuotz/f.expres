var express = require('express');
var mongoose = require('mongoose');
var schemas = require('./models/one');
var port = 3000; // Replace with your desired port number
var MongoURL = 'mongodb://localhost:27017/evol'; // Replace with your MongoDB connection string (username, password, database name)

// Connect to MongoDB
mongoose.connect(MongoURL, {
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit with an error code if connection fails
    });

var app = express();

// Add your Express routes, middleware, and other logic here
//1.Routes
app.get('/users', (req, res) => {
    schemas.find()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error);
        })
})


// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
