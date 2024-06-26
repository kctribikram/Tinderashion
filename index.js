const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT || 3000;
require('./app/config/database')(process.env.DATABASE_URL);

// app.use('/role', require('./app/routes/route.role'));
app.use('/user', require('./app/routes/route.user'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});