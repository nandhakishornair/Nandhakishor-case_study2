// // newly created...
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;


const signinSchema = new Schema({
    firstname:String,
    lastname:String,
     uid : String,    
    pwd: String
});

const signindata = mongoose.model('signindata',signinSchema);

module.exports = signindata;