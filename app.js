"use strict"

const  express = require('express');
const  cors = require("cors");
const {authenticateJWT} = require("./middleware/auth");
const {NotFoundError} = require("./expressError");

const parkRoute = require('./routes/park');
const hospitalRoute = require('./routes/hospital');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const homeRoute = require("./routes/home");
const commentRoute = require("./routes/comment");
const searchRoute = require("./routes/search");
const imageRoute = require("./routes/addimage");
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

app.use(authenticateJWT);
app.use("/",homeRoute);
app.use("/auth",authRoute);
app.use("/dog_parks",parkRoute);
app.use("/dog_hospitals",hospitalRoute);
app.use("/users",userRoute);
app.use("/comment",commentRoute);
app.use("/dog_place",searchRoute);
app.use('/add_image',imageRoute)



app.use(function(req,res,next){
    return next(new NotFoundError())
});

app.use(function(err,req,res,next){
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error:{
            message,
            status
        }
    })
});

module.exports =app;