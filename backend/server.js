const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4141;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
connectDB();
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/group', require('./routes/groupRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/event', require('./routes/eventRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('🛴 on port ' + PORT);
});
