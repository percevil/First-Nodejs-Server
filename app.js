const express = require('express');

const app = express();



app.use('/', (req, res, next) => {
    console.log('First Middleware');
    next();
});


app.use('/products',(req, res, next) => {
    console.log("Second Middleware !!");
    res.send("<h1>Youve reached the HOME Page DUDE!!</h1>");
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Youve reached the home page Man!</h1>');
  });

app.listen(3000);