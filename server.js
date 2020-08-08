const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { animals } = require('./data/animals.json');
const fs = require('fs');
const path = require('path');
const { type } = require('os');

//modulized code and importing the routing methods
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//these two functions are using the routing functions in those other files
//This is our way of telling the server that any time a client navigates to <ourhost>/api, 
//the app will use the router we set up in apiRoutes. 
//If / is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//makes it so front end resources are added when another is request(like css and js front end files)
app.use(express.static('public'));












app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});