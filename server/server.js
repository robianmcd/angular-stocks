//Dependencies
var express = require('express')


//Initialize
var app = express();


//Middleware
app.use(express.static(__dirname + '/../client'));

//Endpoints
app.get('/api', function(req, res) {
    res.send('Hello API');
});


//Start
var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('Listening on port %d', server.address().port);
});