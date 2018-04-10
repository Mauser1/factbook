const path = require('path');
const express = require('express');

const PORT = process.env.NODE_ENV || 8080
const app = express();

app.use(express.static('dist'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, error => (
  error ?
  console.error(error) :
  console.info(`==> 🌎 Listening on port ${PORT}`)
));
