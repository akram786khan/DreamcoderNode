const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware')
const ConnectDB = require('./config/db');
const { execPath } = require('process');
const app = express();

ConnectDB();
// app.get("/", (req, res) => {
//     res.status(200).json({ message: "get data" });
// })
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/products', require('./routes/productRoutes'))
app.listen(port, () => {
    console.log(`app server started on port ${port}`)
})