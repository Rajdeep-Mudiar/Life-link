// Requires
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');
const methodOverride = require('method-override');
dotenv.config();

// Middlewares
const app = express();

// Port Set-up
const port = process.env.PORT || 8080;
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(express.static('public'));
app.use("/uploads", express.static("uploads"));

//Handling method-override
app.use(methodOverride('_method'));

// Handling Post Request
app.use(express.urlencoded({ extended: true }));


app.use('/', homeRoutes);

// Database Set-up
const db = mongoose.connect(process.env.MONGO_URL);
db.then(() => {
  console.log(`Connection to database is successful`);
}).catch((err) => {
  console.log(err);
});



// Running server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


