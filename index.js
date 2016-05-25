
var express = require('express');
var app = express();
const Graph = require('node-dijkstra');


//var Studnets  = mongoose.model('Studnets',gradesSchema);

var data = require('./data.json');

var route = getGraph();
app.get('/',function(req,res) { //todo get all map
    var status = 200;
    var route = getGraph();
    res.status(status).send(route);
});

app.get('/setStatusRoom/:room/:status',function(req,res) { //todo set status in data base
    var status = 200;
    var route = getGraph();
    res.status(status).send(route);
});
app.get('/getPath/:from/:to',function(req,res) { //todo validation
    var from = req.params.from;
    var to = req.params.to;
    console.log("from:"+from);
    console.log("to:"+to);
    var status = 200;
    var route = getGraph();
    var message = route.path(from,to,{cost:true});
    console.log(message);
    console.log(route);
    res.status(status).send(message);
});
//console.log(route.path('1', '4',{cost:true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

function getGraph() {   //todo get json from mongoDb  and transform to GRAPH API
    var graph = new Graph();
    var sizeArray = data.places.length;
    for(var i = 0 ; i < sizeArray;i++){
        var sizeNeighbors =  data.places[i].neighbors.length;
        var neighbors = data.places[i].neighbors;
        var array = [];
        var cost = 0;
        var neighbor = null;
        var temp = {};
        for(var j = 0 ; j < sizeNeighbors;j++){
            neighbor = parseInt(neighbors[j].Id);
            cost  = parseInt(neighbors[j].weight);
            temp[neighbor]= cost;
        }
        graph.addNode(data.places[i].Id.toString(),temp);
    }
    return graph;
}