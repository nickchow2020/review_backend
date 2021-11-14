"use strict"

const express = require("express");
const {ensureCorrectUserOrAdmin,ensureAdmin} = require("../middleware/auth");
const {BadRequestError} = require("../expressError");
const jsonschema = require("jsonschema");
const newUserSchema = require("../schemas/newUserSchema.json");
const userUpdateSchema = require("../schemas/updateUserSchema.json");
const User = require("../models/user");
const {createToken} = require("../helpers/tokens")

const router = express.Router();

router.post("/", ensureAdmin,async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body,newUserSchema);
        if(!validator.valid){
            const errors = validator.errors.map(e => e.message);
            throw new BadRequestError(errors);
        };

        const newUser = await User.register(req.body);
        const token = createToken(newUser);
        return res.status(201).json({newUser,token});
    }catch(err){    
        return next(err);
    }
})

router.get("/",ensureAdmin, async function(req,res,next){
    try{
        const allUsers = await User.findAll();
        return res.json({allUsers});
    }catch(err){
        return next(err);
    }
})

router.get("/:username", ensureCorrectUserOrAdmin, async function(req,res,next){
    try{
        const targetUser = await User.get(req.params.username);
        return res.json({targetUser});
    }catch(err){
        return next(err);
    };
})

router.patch("/:username", ensureCorrectUserOrAdmin, async function(req,res,next){
    try{    
        const validator = jsonschema.validate(req.body,userUpdateSchema)
        if(!validator.valid){
            const errors = validator.errors.map(e => e.message)
            throw new BadRequestError(errors)
        }

        const userUpdate = await User.update(req.params.username,req.body)
        return res.json({userUpdate})
    }catch(err){
        return next(err)
    }
})


router.delete("/:username",ensureCorrectUserOrAdmin,async function(req,res,next){
    try{
        await User.delete(req.params.username);
        return res.json({userDeleted: req.params.username});
    }catch(err){
        return next(err);
    }
})




module.exports = router;