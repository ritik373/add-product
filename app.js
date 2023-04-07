
const express = require('express');
const app = express();
const bodyparser=require('body-parser');

const admin=require('./routes/admin');
const shop=require('./routes/shop');
app.use(bodyparser.urlencoded({ extended: false }));

app.use(admin);
app.use(shop);




app.listen(8000, (req, res) => {
    console.log("server is working  on this port " + 8000);

})