const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>root node</h1>');
});

//  include route files
const helloWorldRoute = require('./routes/helloWorld');

// use routes
app.use('/helloWorld', helloWorldRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
