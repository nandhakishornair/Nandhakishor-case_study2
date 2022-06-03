const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../model/signinmodel');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})
//@@@@@@method change to POST in signup.ejs Q-10
signupRouter.post('/adduser',function(req,res){

    var user={
        fname:req.body.fname,
        lname:req.body.lname,
        uid:req.body.uid,
        pwd:req.body.pwd
    };
 
    var newUser=new userdata(user);
    newUser.save();
    res.redirect('/login');
 });
 module.exports= signupRouter;
// 
// signupRouter.get("/adduser",function(req,res){
//     // changed double quotes and function bracket
//     var newuser = {
//         uid:req.params.uid,
//         pwd:req.params.pwd
//     };
//     console.log(newuser);
//     user.push(newuser);
//     console.log(user);
//     res.redirect("/login");
// })

// module.exports = signupRouter;