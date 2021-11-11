"use strict"

const express = require("express");
const jsonschema = require("jsonschema");
const DogPark = require("../models/dogPlace");
const parkSchema = require("../schemas/newDogPlaceSchema.json");
const updateParkSchema = require("../schemas/dogPlaceUpdateSchema.json");
const {BadRequestError, NotFoundError} = require("../expressError");


const router = express.Router({mergeParams: true});

router.get("/", async function(req,res,next){
    try{
        const parks = await DogPark.getAll("park");
        return res.json({parks})
    }catch(err){
        return next(err)
    };
});

router.get("/:id",async function(req,res,next){
    try{
        const id = req.params.id;

        const park = await DogPark.get(id)

        if (park.place_type != "park") throw new NotFoundError(`No park id found: id ${id}`)

        return res.json({park})
    }catch(err){
        return next(err)
    }
})


router.delete("/:id", async function(req,res,next){
    try{
        const id = req.params.id
        const placeType = await DogPark.type(id)
        if (placeType != "park") throw new BadRequestError(`you can only delete parks`)
        await DogPark.remove(id)
        return res.json({deleted: `dog park id ${id}`})
    }catch(err){
        return next(err)
    }
})

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

router.patch("/:id", async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body, updateParkSchema);
        if (!validator.valid){
            const err = validator.errors.map(e => e.message)
            throw new BadRequestError(err)
        };

        const updatedPark = await DogPark.update(req.params.id,req.body);
        return res.json({updatedPark})
    }catch(err){
        return next(err)
    }
})


module.exports = router


