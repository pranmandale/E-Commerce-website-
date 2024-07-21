const express = require('express');
const cors = require('cors');

const app = express();

// Apply CORS middleware
const corsOptions = {
  origin: 'https://pranmandale.github.io',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
