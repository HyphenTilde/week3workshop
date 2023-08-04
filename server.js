var express = require('express'); // used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/www'));

app.listen(3000, '127.0.0.1', function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at : ' + n + ':' + m);
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
});

app.get('/', function (req, res){
    res.sendFile(__dirname + '/www/login.html');
});

app.post('/api/login', function (req, res) {
    let users = [{'email':'alexa55@gmail.com','pass':'Cupcake7'},{'email':'moltenjones@gmail.com','pass':'Bronze33'},{'email':'briannaban@gmail.com','pass':'Hammer64'}]
    
    let user = {};
    user.email = req.body.email;
    user.pass = req.body.pass;
    user.valid = false;

    for (let i=0;i<users.length;i++){
        if(req.body.email == users[i].email && req.body.pass == users[i].pass){
            user.valid = true;
        }
    }
    res.send(user);
});

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
});