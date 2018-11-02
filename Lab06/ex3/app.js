var express = require("express");
var app = express();
var mongoose = require('mongoose');

mongoose.connect('');

var port = process.env.PORT || 3000;
app.listen(port);

mongoose.connect('mongodb://admin:admin1@ds227853.mlab.com:27853/lab06');

var Schema = mongoose.Schema;

var userSchema = new Schema({ name: String, status: String });

var User = mongoose.model('User', userSchema);

var timmy = User({ name: 'Timmy', status: 'active' });

timmy.save(function(err){
    if (err) throw err;
    console.log('**** User Saved! ****');
});

var jane = User({ name: 'Jane', status: 'inactive' });

jane.save(function(err){
    if (err) throw err;
    console.log('**** User Saved!!! ****');
});