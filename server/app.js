// adding Express Framework
const express = require('express')
const app = express()

//adding Models
const User = require('./models/user')

//access to .env
require('dotenv').config()

//adding mongoose
const mongoose = require('mongoose')

//adding express EJS Layout
const expressEjsLayout = require('express-ejs-layouts')

const session = require('express-session');
const flash = require('connect-flash');

// authentication 
const passport = require('passport');
require("./config/passport")(passport)

// connect to react - front-end
const cors = require('cors')
app.use(cors())

// Connection to the DB
mongoose.connect(
  process.env.DB_CONNECTION
)
.then ((result) => console.log('CONNECTED TO THE DB'))
.catch ((err) => console.log(err))

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended : false}));

//express session
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
 }));
app.use(passport.initialize());
app.use(passport.session());

 //use flash - flash message
 app.use(flash());
 app.use((req,res,next)=> {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error  = req.flash('error');
 next();
 })

//Routes
app.use('/',require('./routes/indexRoute'));
app.use('/users',require('./routes/userRoute'));


//connection to the server
app.listen(3001, () => {
  console.log('SERVER RUNS')
})