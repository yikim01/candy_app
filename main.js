var express = require('express');
var app = express(),
http = require('http'),
path = require('path'), //allows us to deal with file structures
port = process.env.PORT || 3000; //process.env are environmental variables
morgan = require('morgan'), //this keeps the server logs
bodyParser = require('body-parser'), //breakdown a POST request by request.body
router = express.Router(); //allows us to do server side routing


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

//set up middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//when someone comes to our root directory, show them this response
router.get('/', function(request, response, next){
  response.send('Hello world');
});

//index
router.get('/candies', function(request, response, next){
  response.render('index', {title: 'Candies'});
});

//show
router.get('/candies/:id', function(request, response, next){
  response.render('show', {title: 'A candy'});
});

//make a jade view

//create
router.post('/candies', function(request, response, next){
  response.send('Posted');
    });

//new
router.get('/candies/new', function(request, response, next){
  response.render('new', {title: 'New candy'});
  });

//edit
router.get('/candies/:id/edit', function(request, response, next){
  response.render('edit', {title: 'Edit candy'});
  });

//post
router.post('/candies/', function(request, response, next){
    response.send({
    success: true,
    name: 'candies'
  });
});

//update
router.put('/candies', function (request, response, next){
  response.render('Updated');
  });

//destroy
router.delete('/candies', function (request, response, next){
  response.render('Deleted');
  });


app.use('/', router);

//you have server but need to listen for port
var server = http.createServer(app);

//connects server
server.listen(port);
console.log('The magic happens on port ' + port);

//use nmp start
