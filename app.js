const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
 const bodyParser=require('body-parser') //body parser required 
// links to addbook and addauthor changed
// the nav bar is moved to /users folder so that modularization can be achieved  @@ (Q-6)
// nav is used in ejs file books and book only!!! 
// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]
// user defined local modules
// error rectified in home router @@@ Q.3 part3
const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 
//the cors is being used to  relax the security applied to an API @@@ Q(7)
app.use(cors({
    origin: '*'
}));

// ejs is template engine
// front end related part stored in src
app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 


// only api in main folder 
app.get('/',function(req,res){
// rendering related to front end (views file)
    res.render('index',{});
    
});



const port = process.env.PORT || 5000;
// @@@   changed 3000=>5000 in console
app.listen(port,()=>{
    console.log("Server Ready on 5000");
});