"use strict"

const express = require("express");
const jsonschema = require("jsonschema");
const DogPark = require("../models/dogPlace");
const parkSchema = require("../schemas/newDogPlaceSchema.json");
const {BadRequestError} = require("../expressError");


const router = express.Router({mergeParams: true});

router.get("/", async function(req,res,next){
    try{
        const parks = await DogPark.getAll("park");
        return res.json({parks})
    }catch(err){
        return next(err)
    };
});


router.post("/", async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body,parkSchema);
        if(!validator.valid){
            const errors = validator.errors.map(error => error.message);
            throw new BadRequestError(errors);
        }

        const park = await DogPark.createPlace(req.body)
        return res.status(201).json({park})

    }catch(err){
        return next(err)
    };
});

module.exports = router


