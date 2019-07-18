const express = require('express');
const mongoose = require('mongoose');

const dbRoutes = require('./routes/databaseAccess.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!');
});
