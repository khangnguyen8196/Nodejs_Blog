const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const hbs = handlebars.create( { extname: '.hbs'} )
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));


// Template engine
app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources","views"));

// method
app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.post('/search', (req, res) => {
  console.log(req.body.q)
  res.send('');
});


app.get('/search', (req, res) => {
    // console.log(req.query.q)
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

   


