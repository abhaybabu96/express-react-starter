const express = require('express');
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const morgan = require("morgan")


// Load environment variables
require('dotenv').config();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// app use cors middleware
app.use(cors());
app.use(morgan('dev'));
// Home route
app.use(express.static('public'));

//dynamic home
app.get('/', (req, res) => {
  const user = "Abhay Babu";
  res.render('index', { username: user });
});

// Import the backend routes
const shopifyRoutes = require('./server/index');
app.use('/', shopifyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// // About Route
// app.get('/about', (req, res) => {
//   const info = "About page after installing the nodemon!";
//   res.render('about', { infoText: info });
// });

// // Contact Route
// app.get('/contact', (req, res) => {
//   const info = "This is using the contact page using ejs!";
//   res.render('about', { infoText: info });
// });

// // Contact Route
// app.get('/privacy', (req, res) => {
//   const info = "This Privacy page using ejs!";
//   res.render('about', { infoText: info });
// });

// app.get('/api', (req, res) => {
//   const info = "This Privacy page using ejs!";
//   res.render('about', { infoText: info });
// });



