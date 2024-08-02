// Import necessary modules
const express = require('express');
const fs = require('fs');         // fs module to read files.
const path = require('path');    ///path to get the required directories
const cors = require('cors');

// Create an instance of an Express application
const app = express();
app.use(cors());
// Define a port number
const PORT = 3010;
console.log(path.join(__dirname,'data', 'items.json'))
// Define a route to read and display JSON data
app.get('/data', (req, res) => {
  // Read the JSON file
  fs.readFile(path.join(__dirname,'data', 'items.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Sorry, something went wrong');
      return;
    }
    // Parse the JSON data and send it as a response
    res.json(JSON.parse(data));
  });
});

// Start the server and listen on the port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});