const express = require('express');
const app = express();

//Route 1 (Home Page)
app.get('/', (req, res) => {
    res.send('Welcome to MERN Stack class');
});

//Route 2 (About Page)
app.get('/about', (req, res) => {
    res.send('About Page');
});

//Route 3 (Services Page)
app.get('/services', (req, res) => {
    res.send('Services Page');
});

//Route 4 (Contact Page)
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(3006, () => {
    console.log('Server running on port 3006');
});