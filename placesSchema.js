var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var places = new Schema({
    id:{type:String,index:1,required:true,unigue:true},
    type:{type:String,required:true},
    name:{type:String,required:true},
    neighbors: [{ 	id:String,
        weight:Number,
        }]
},{collection:'places'});

var placesSchema = mongoose.model('places', places);
module.exports  = placesSchema;