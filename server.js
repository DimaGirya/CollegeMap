var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mapAction = require('./mapActionsController');


/*
var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://db_user:db_pass@ds023520.mlab.com:23520/places");

var placesSchema = require('./schema');
var flagIsConnection = false;

db.connection.once("open",function() {
    flagIsConnection = true;
console.log("We are connected!");
});

*/
/*
app.get('/',function(req,res) { 
    //console.log("")
    res.sendFile(__dirname +'/public/index.html')
});
*/
app.set('port',port);
app.use('/',express.static('./public'));
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/getMap',mapAction.getMap);
app.get('/getMapToDisplay',mapAction.getMapToDisplay);
app.get('/getPath/:from/:to',mapAction.getPath);
app.get('/setStatusRoom/:room/:status',mapAction.setStatusRoom);
app.get('/getRoomStatus',mapAction.getRoomStatus); // need?

app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

/*
// get all places
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



app.get('/getMapToDisplay',function(req,res) { //todo get all map

    var class1 = {id: 1, type: "classroom", name: "classroom1", coord_x: 0, coord_y: 0, width: 5, height: 10};
    var class2 = {id: 2, type: "classroom", name: "classroom2", coord_x: 5, coord_y: 0, width: 5, height: 7};
    var hallway1 = {id: 3, type: "hallway", name: "hallway1", coord_x: 5, coord_y: 7, width: 5, height: 3};
    var map = [ [],[],[],[],[], [], [], [], [], [] ];
    var places = [class1, class2, hallway1];
        for(var i=0;i<places.length;i++){
            var place = places[i];
            var coord_y = place.coord_y;
            var height = place.height;
            var coord_x = place.coord_x;
            var width = place.width;
            for (var j=coord_y;j<coord_y+height;j++){
                for (var k=coord_x;k<coord_x+width;k++){
                    map[j][k] = place.id;
                }
            }
            console.log(map);
            console.log("\n\n");
        }
});





// get id's of places of the shortest path and cost
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


app.get('/getRoomStatus/:room/',function(req,res) { //todo make query by param :room
    placesSchema.find({},function (err,data) {
        if(err){
            throw err;
        }
        var room_status;
        res.status(200).send(room_status)
    });
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
    */