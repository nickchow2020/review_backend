"use strict";

const express = require("express");
const DogPlace = require("../models/dogPlace");

const router = express.Router({mergeParams: true});

router.get("/",async function(req,res,next){
  try{
    const topSixPark = await DogPlace.topSix("park");
    const topSixHospital = await DogPlace.topSix("hospital");
    return res.json({topSixPark,topSixHospital});
  }catch(err){
    next(err);
  }
})


module.exports = router;