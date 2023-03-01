const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.port || 4141;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
connectDB();
const cors = require('cors');
app.use(cors());

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/group', require('./routes/groupRoutes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log('🛴 on port ' + port);
});
