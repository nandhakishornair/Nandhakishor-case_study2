//                                              part 2 Q-10  mongodb used!!!
const express = require('express'); 
const loginRouter = express.Router();
const userdata = require('../model/signinmodel');
// const signindata = require('../model/signinmodel');
loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})
loginRouter.post("/check",function(req,res){
   
    userdata.findOne({uid:req.body.uid},(err,data)=>{
      
    if(data)
    {
        if(data.pwd==req.body.pwd)
        {
            
            res.redirect('/home');
        }

    }
    else{
        res.redirect('/signup');
    }
    }) 
});




module.exports = loginRouter;

// changed parm=>parms
// changed function bracket and double quotes
// loginRouter.get("/check",function(req,res){
//     var checkuser = {
//         uid:req.params.uid,
//         pwd:req.params.pwd
//     };
    
//     console.log(checkuser);
//     var flag=false;

// //    var flagg = user.find((e)=>{
//        for(let i=0;i<user.length;i++){
        
//         if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd)
//         {
            
//             flag=true;
//             break;
//         }
//         else{
//                 flag=false;
//             }
//         };

//         console.log(flag);

// if(flag==true){
//     // alert("User Verified.Click to continue");
//     res.redirect("/home")
// }
// else{
//     // alert("User Verification Failed");
//     res.redirect("/signup");
// }

// });




// module.exports = loginRouter;