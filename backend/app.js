const express = require('express');
const cors = require('cors');
require('dotenv').config();

const domainRoutes = require('./routes/domainRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Use domain routes
app.use('/api', domainRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
