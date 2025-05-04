const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 