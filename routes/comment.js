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

router.get("/addComment/:user_id/:place_id/:score/:comment",ensureLoggedIn,async function(req,res,next){
  try{
    const user_id = req.params.user_id;
    const place_id = req.params.place_id;
    const score = req.params.score;
    const comment = req.params.comment;
    const newComment = await DogPlace.addNewComment(user_id,place_id,score,comment);
    return res.json({newComment});
  }catch(err){
    return next(err)
  }
})


module.exports = router;