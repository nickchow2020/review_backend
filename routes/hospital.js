const express = require("express");
const jsonschema = require("jsonschema");
const hospitalSchema = require("../schemas/newDogPlaceSchema.json");
const DogHospital = require("../models/dogPlace");


const router = express.Router({mergeParams: true});

router.get("/",async function(req,res,next){
    try{
        const hospitals = await DogHospital.getAll("hospital");
        return res.json({hospitals})
    }catch(err){
        return next(err)
    }
})


router.post("/", async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body,hospitalSchema);
        if(!validator.valid){
            const errors = validator.errors.map(error => error.message);
            throw new BadRequestError(errors);
        }

        const park = await DogHospital.createPlace(req.body)
        return res.status(201).json({park})

    }catch(err){
        return next(err)
    };
});


module.exports = router


