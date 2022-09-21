const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars')
const hbs = exphbs.create( { extname: '.hbs'} )
const path = require('path');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));


// Template engine
app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resource","views"));

// method
app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

