"use strict"

const express = require("express");
const DogPlace = require("../models/dogPlace");
const {ensureLoggedIn} = require("../middleware/auth");

const router = express.Router({mergeParams: true});

router.get('/',ensureLoggedIn,async (req,res,next)=>{
  try{
    const searchValue = req.query.search;
    const result = await DogPlace.searchForDogPlace(searchValue);
    res.json({result});
  }catch(err){
    next(err);
  }
});

module.exports = router