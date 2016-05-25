var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://db_user:db_pass@ds023520.mlab.com:23520/places");

var placesSchema = require('./schema');

//var places  = mongoose.model('places',placesSchema);
//
// var conn = mongoose.connection;
// conn.on('error', function (err) {
//     console.log('connection error' + err);
// });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('Conntected To Mongo Database');
});

/*
conn.once('open', function(){
   console.log('connected');
    mongoose.disconnect();
});
*/
function getAllPlaces() {
    var query = placesSchema.find();
    return query

}






function updateRoomStatus(isEmpty){

}

getAllPlaces2();