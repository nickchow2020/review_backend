"use strict"

const express = require("express");
const jsonschema = require("jsonschema");
const { BadRequestError } = require("../expressError");
const userRegisterSchema = require("../schemas/userRegister.json");
const userLoginScheme = require("../schemas/userLoginSchema.json");
const User = require("../models/user");
const {createToken} = require("../helpers/tokens");

const router = express.Router({mergeParams: true});

router.post("/register",async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body,userRegisterSchema);

        if(!validator.valid){
            const errs = validator.errors.map(e => e.message);
            throw new BadRequestError(errs);
        };

        const newUser = await User.register({...req.body});

        const token = createToken(newUser);

        return res.status(201).json({token});
    }catch(err){
        return next(err);
    };
})

router.post("/token",async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body,userLoginScheme);

        if(!validator.valid){
            const errs = validator.errors.map(e => e.message)
            throw new BadRequestError(errs)
        };

        const {username,password} = req.body;

        const user = await User.authenticate(username,password);
        const token = createToken(user);
        return res.json({token});
    }catch(err){
        return next(err);
    }
})

module.exports = router;
