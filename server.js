
var express = require('express');
var app = express();
const Graph = require('node-dijkstra');

var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://db_user:db_pass@ds023520.mlab.com:23520/places");

var placesSchema = require('./schema');
var flagIsConnection = false;

db.connection.once("open",function() {
    flagIsConnection = true;
console.log("We are connected!");
});


app.get('/',function(req,res) { //todo get all ma
    //console.log("")
    res.sendFile(__dirname +'/public/index.html')
});


app.get('/getAllMap',function(req,res) { //todo get all map
    var status = 200;
    if(!flagIsConnection){
        res.status(status).send({"MESSAGE":"No connection to data base.Try again leter"});
    }
    placesSchema.find({},function (err,data) {
        if(err){
            throw err;
        }
        res.status(status).send(data)
    });
});

app.get('/getPath/:from/:to',function(req,res) { //todo validation
    var from = req.params.from;
    var to = req.params.to;
    console.log("from:"+from);
    console.log("to:"+to);
    var status = 200;

    placesSchema.find({},function (err,data) {
        if(err){
            throw err;
        }
        console.log("size data:"+data.length);
        var temp  = JSON.stringify(data);
        var places = JSON.parse(temp);  // todo need to change

        var route = getGraph(places);
        var message = route.path(from,to,{cost:true});
        res.status(status).send(message)
    });

});

app.get('/setStatusRoom/:room/:status',function(req,res) { //todo set status in data base
    var status = 200;
    var route = getGraph();
    res.status(status).send(route);
});


//console.log(route.path('1', '4',{cost:true}));

app.use('/',express.static('/public')).listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

function getGraph(places) {   
    var graph = new Graph();
    var sizeArray = places.length;

    for(var i = 0 ; i < sizeArray;i++){
        var sizeNeighbors =  places[i].neighbors.length;
        var neighbors = places[i].neighbors;
        var cost = 0;
        var neighbor = null;
        var temp = {};
        for(var j = 0 ; j < sizeNeighbors;j++){
            neighbor = parseInt(neighbors[j].Id);
            cost  = parseInt(neighbors[j].weight);
            temp[neighbor]= cost;
        }
        console.log(typeof  places[i]);
        console.log(places[i].Id);
        console.log(temp);
        graph.addNode(places[i].Id.toString(),temp);
    }
    console.log(graph);
    return graph;
}