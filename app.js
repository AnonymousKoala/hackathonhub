const express = require('express')
const app = express()
app.use(express.static('public'));

const PORT = process.env.PORT || 8000;

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/views/hubLogin.html');
});

app.post('/homepage',function(req,res){
	res.sendFile(__dirname + '/views/homepage.html');
});

app.listen(PORT, () => {

	console.log(`app is up and running on ${PORT}`);
});