const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from saad');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

