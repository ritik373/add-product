
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
console.log(__dirname);
const dir = path.join(__dirname);
app.get('/', (req, res) => {

    res.sendFile(dir + '/index.html');

})
app.get('/product', (req, res) => {

    res.send("<h1>this is product page</h1>");

})
app.post('/addproduct', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})


app.listen(8000, (req, res) => {
    console.log("server is working  on this port " + 8000);

})