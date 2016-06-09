
//------------Connect tomongodbonmLabvia Mongoose--------------
var flagIsConnection =  false;
var mongoose = require('mongoose');
config = {
    mongoUrl:'mongodb://db_user:db_pass@ds023520.mlab.com:23520/places'
};

//The server optionauto_reconnectis defaulted to true
var options = {
        server: {
            auto_reconnect:true
        }
    };

mongoose.connect(config.mongoUrl, options);
db = mongoose.connection;// a global connection variable

// Event handlers for Mongoose
db.on('error', function (err) {
    console.log('Mongoose: Error: ' + err);
});
db.on('open', function(){
    flagIsConnection = true;
    console.log('Mongoose: Connection established');
});
db.on('disconnected', function(){
    flagIsConnection = false;
    console.log('Mongoose: Connection stopped,recconect');
    mongoose.connect(config.mongoUrl, options);
});
db.on('reconnected', function (){
    flagIsConnection = true;
    console.info('Mongoose reconnected!');
});