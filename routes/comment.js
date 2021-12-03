"use strict";

const express = require("express");
const DogPlace = require("../models/dogPlace");
const {ensureLoggedIn} = require("../middleware/auth");

const router = express.Router({mergeParams: true});

router.patch("/like/:id/:likes/:dislikes",ensureLoggedIn, async function(req,res,next){
  try{
    const commentId =  req.params.id;
    const commentLikes =  req.params.likes;
    const commentDislikes = req.params.dislikes;
    const likes = await DogPlace.updateLikes(commentId,commentLikes,commentDislikes);
    return res.json({likes})
  }catch(err){
    return next(err)
  }
})


module.exports = router;