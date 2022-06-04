// deprication warning was cleared...@part#2 point 10
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Nandhakishor:<ssk3A4FivTkBPmYL>@cluster0.h0mdcdg.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;
// seems oke