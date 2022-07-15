var express = require("express")
var app=express()

//Public Domain
app.use(express.static('public'))

app.get('/main', function (req, res) {  
    res.sendFile(__dirname+"/"+"main.html");  
 })

app.get('/show_data', function (req, res) {  
    response = {
        fname:req.query.fname,
        lname:req.query.lname
    };
    console.log(response);
    res.end(JSON.stringify(response))
 })
var server = app.listen(8000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
})