const express = require('express'); 
const authorsRouter = express.Router();
//  const authors = require('../data/authors');
const authordata = require('../model/AuthorModel');



//router to render authors page
authorsRouter.get('/',function(req,res){

    authordata.find() 
    .then(function (authors) {

    res.render('authors',{
        authors
    });

    })
})



//router to render add author page
authorsRouter.get('/addauthor',function(req,res){
    res.render('addauthor',{});

});




//router to add author
authorsRouter.post('/add', function (req, res) {
// the spelling of images changed to image @@ Q-8
    var item={
        title:req.body.title,
        image:req.body.image,
        about:req.body.about
    }
    console.log(item)  ;
    const author = new authordata(item);
    author.save();
    res.redirect('/authors');

})




//router for single author
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    authordata.findOne({ _id: id })
            .then(function (author) {
                res.render('author', {
                    author
                })

            })
    
});

// router to delete author
// authorsRouter.post('/delete', function (req, res) {

//     const id = req.body.id;  

//     authordata.findOneAndDelete({ _id: id })
//         .then(function () {

//             res.redirect('/authors')

//         })  
// })
//              part#2-point 9 @@@
authorsRouter.post('/delete', function (req, res) {

    const id = req.body.id;  

    authordata.findOneAndDelete({ _id: id })
    if (err) {
        console.log(  err);
    } else {
        console.log( '  deleted')
        res.redirect('/authors')
    }
})


// router to delete author
// authorsRouter.delete('/delete', function (req, res) {

//     const id = req.params.id;  

//     authordata.findByIdAndDelete({ _id: id }, function (err) {

//         if (err)
//             console.log( err)
//         else {
//             console.log('book deleted  ')
//             res.redirect('/authors')
//         }
//     })
// })
// authorsRouter.delete('/delete', function (req, res) {

//     const id = req.body.id;  

//     authordata.findOneAndDelete({ _id: id })
//         .then(function () {

//             res.redirect('/authors')

//         })  
// })


//router to edit author
authorsRouter.post('/edit', function (req, res) {

    authordata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editauthor', {data})
        }
    })
})




//router to update author
authorsRouter.post('/update', function (req, res) {

    authordata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
        if (err) {
            res.json({ status: "Failed" });
        }
        else if (data.n == 0) {
            res.json({ status: "No match Found" });
        }
        else {
            res.redirect("/authors")
        }

    })  
})






module.exports = authorsRouter;