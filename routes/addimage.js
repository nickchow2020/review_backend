"use strict"

const express = require("express");
const DogPlace = require("../models/dogPlace");
const {ensureLoggedIn} = require("../middleware/auth");

const router = express.Router({mergeParams: true});

router.get('/',ensureLoggedIn,async (req,res,next)=>{
  const placeId = req.query.place_id;
  const url = req.query.image_url;
  try{
    const result = await DogPlace.addImage(placeId,url);
    res.json({result});
  }catch(err){
    next(err)
  }
})



module.exports = router;