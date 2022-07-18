var express = require("express")
var app=express()

var {price, gst, totalPrice} = require('./main.js');

//Public Domain
app.use(express.static('public'))

app.get('/main', function (req, res) {  
    res.sendFile(__dirname+"/"+"main.html");  
 })

app.get('/show_data', function (req, res) {  
    response = {
        to:req.query.to,
        from:req.query.from,
        // doj: req.query.doj,
        // returnDate: req.query.return-date,
        // price: price,
        // gst: gst,
        // totalPrice: totalPrice
    };
    console.log(response);
    res.end(JSON.stringify(response))
 })
var server = app.listen(8000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
})