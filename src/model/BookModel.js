// deprication warning was cleared...@part2 Q10
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;