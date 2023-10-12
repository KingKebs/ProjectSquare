const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser'); // Add this line

app.use(bodyParser.json()); // Add this line to parse JSON in the request body

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// This code sets up a basic server that listens on port 3000.