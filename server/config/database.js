const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project_square', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// This code connects to a MongoDB database named 'project_square'.