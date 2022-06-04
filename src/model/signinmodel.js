// // newly created...
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Nandhakishor:<ssk3A4FivTkBPmYL>@cluster0.h0mdcdg.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
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