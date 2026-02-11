const express = require('express');
const app = express();
const port = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// HOME ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to My Express App!');
});

// ABOUT ROUTE
app.get('/about', (req, res) => {
  res.send('This is a simple Express application for learning purposes.');
});

// CONTACT FORM PAGE
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <form method="GET" action="/submit">
      <label>Name:</label><br>
      <input type="text" name="name"><br><br>

      <label>Email:</label><br>
      <input type="email" name="email"><br><br>

      <label>Other Contact:</label><br>
      <input type="text" name="other"><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// FORM HANDLER
app.get('/submit', (req, res) => {
  const name = req.query.name;
  const other = req.query.other;

  res.send(`Thank you, ${name}! We have received your message: ${other}`);
});

// START SERVER
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
