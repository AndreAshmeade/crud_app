const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require("path");

const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT||8080;

//log requests 
app.use(morgan('tiny'));


//mongoose connection
connectDB();

//parse request to body-parser
app.use(express.urlencoded({extended:true}));


// set view engine 
//app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//load Assets 
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));

//load routers
app.use("/", require('./server/routes/router'));

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});

