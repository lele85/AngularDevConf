var express = require("express"),
	app = express();

app.use(express.static(__dirname+'/../client/'));
app.get('/api/talks', function(req,res){
	res.sendfile(__dirname + "/talks.json");
});

app.get('/api/authors/:id', function(req,res){
	res.sendfile(__dirname + "/authors/"+req.params.id+".json");
});


app.listen(8000);

console.log("App ready at: http://127.0.0.1:8000");