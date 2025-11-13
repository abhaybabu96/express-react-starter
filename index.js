const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Set EJS as the template engine
app.set('view engine', 'ejs');

// Home route
app.use(express.static('public'));

// dynamic home
app.get('/', (req, res) => {
  const user = "Abhay Babu";
  res.render('index', { username: user });
});

// About Route
app.get('/about', (req, res) => {
  const info = "About page after installing the nodemon!";
  res.render('about', { infoText: info });
});

// Contact Route
app.get('/contact', (req, res) => {
  const info = "This is using the contact page using ejs!";
  res.render('about', { infoText: info });
});

// Contact Route
app.get('/privacy', (req, res) => {
  const info = "This Privacy page using ejs!";
  res.render('about', { infoText: info });
});

app.get('/api', (req, res) => {
  const info = "This Privacy page using ejs!";
  res.render('about', { infoText: info });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
