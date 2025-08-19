const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<p> Home Page </p>');
    res.sendFile('./files/views/index.html', { root: __dirname });
});

app.get('/about', (req, res)=>{
    // res.send('<p> About Page </p>');
    res.sendFile('./files/views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res)=>{
    res.redirect('/about');
});

app.use((req, res)=>{
res.status(404).sendFile('./files/views/404.html', { root: __dirname });
});