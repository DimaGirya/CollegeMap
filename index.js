
var express = require('express');
var app = express();
const Graph = require('node-dijkstra');

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
    var status = 200;
    var route = getGraph();
    var message = route.path(from,to,{cost:true});
    res.status(status).send(message);
});
//console.log(route.path('1', '4',{cost:true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

function getGraph() {   //todo get json from mongoDb  and transform to GRAPH API
    var route = new Graph();

    route.addNode('1', { 3:10, 2:1 });
    route.addNode('2', { 1:1, 3:2, 4: 4 });
    route.addNode('3', { 2:2, 4:1 });
    route.addNode('4', { 3:1, 2:4 });

    return route;
}