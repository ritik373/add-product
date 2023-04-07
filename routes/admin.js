const express=require('express');
const routes=express.Router();




routes.get('/', (req, res) => {
    console.log("errorrr");

    res.send(` <form action="/addproduct" method="post">
    <input type="text" name="name" id="">
    <input type="email" name="email" id="">
<button onsubmit="submit">Submit</button>
</form>`);

})

routes.post('/addproduct', (req, res) => {
    console.log(req.body);
    res.redirect('/shop');
})

module.exports=routes;