
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

app.post('/contact',function(req,res){
   if (!req.body) return res.sendStatus(400);
  console.log("User name = "+req.body.name+", Email is "+req.body.email+", Message is "+req.body.message);
  res.end("Saved User name = "+req.body.name+", Email is "+req.body.email+", Message is "+req.body.message);
});

/*
var express        =         require("express");
var bodyParser     =         require("body-parser");
// load the Couchbase driver and connect to the cluster
var couchbase = require('couchbase');
//no need for parameter if it is localhost
var cluster = new couchbase.Cluster();
var bucket = cluster.openBucket('default');

var app            =         express();
var path = __dirname + '/views/';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile(path+"index.html");
});
app.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
app.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

app.post('/contact',function(req,res){
   if (!req.body) return res.sendStatus(400);
 // Convert our form input into JSON ready to store in Couchbase
  var jsonVersion = JSON.stringify(req.body);

  // Save it into Couchbase with keyname user
  bucket.upsert('user', jsonVersion, function (err, response){
    if (err) {
      console.log('Failed to save to Couchbase', err);
      return;
    } else {
      res.send('Saved to Couchbase!');
    }
  });
  
  console.log("User name = "+req.body.name+", Email is "+req.body.email+", Message is "+req.body.message);
  res.end("yes");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

*/


function processFormFieldsIndividual(req, res) {
    //Store the data from the fields in your data store.
    //The data store could be a file or database or any other store based
    //on your application.
    var fields = [];
    var form = new formidable.IncomingForm();
    form.on('field', function (field, value) {
        console.log(field);
        console.log(value);
        fields[field] = value;
    });

    form.on('end', function () {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields
        }));
    });
    form.parse(req);
	
	res.sendFile(path + "about.html");
}

/*
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    displayForm(res);
});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

server.listen(1185);
console.log("server listening on 1185");
*/
/*
// load the Couchbase driver and connect to the cluster
var couchbase = require('couchbase');
//no need for parameter if it is localhost
var cluster = new couchbase.Cluster();
var bucket = cluster.openBucket('default');

var emps = [{
  "type": "employee",
  "id": 100,
  "name": "Thomas",
  "dept": "Sales",
  "salary": 5000
 }, {
  "type": "employee",
  "id": 200,
  "name": "John",
  "dept": "Development",
  "salary": 4500
 }, {
  "type": "employee",
  "id": 300,
  "name": "Jane",
  "dept": "Marketing",
  "salary": 5000
 }]

// Insert the data in Couchbase using the add method ()
 for (index = 0; index < emps.length; index++) {
    bucket.upsert(JSON.stringify(emps[index].id), JSON.stringify(emps[index]), function(err, res) {
    if (err) {
        console.log('operation failed', err);
        return;
    }

      console.log('success!', res);
    });
 }



//get a record from the database and output the results
bucket.get('1', function(err, result) {
console.log(result);
 });
 */