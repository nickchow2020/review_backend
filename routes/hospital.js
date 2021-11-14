const express = require("express");
const jsonschema = require("jsonschema");
const hospitalSchema = require("../schemas/newDogPlaceSchema.json");
const DogHospital = require("../models/dogPlace");
const updateHospitalSchema = require("../schemas/dogPlaceUpdateSchema.json");
const { NotFoundError } = require("../expressError");
const {ensureAdmin} = require("../middleware/auth");


const router = express.Router({mergeParams: true});

router.get("/",async function(req,res,next){
    try{
        const hospitals = await DogHospital.getAll("hospital");
        return res.json({hospitals})
    }catch(err){
        return next(err)
    }
})

router.get("/:id",async function(req,res,next){
    try{
        const id = req.params.id;

        const hospital = await DogHospital.get(id)

        if(hospital.place_type != "hospital") throw new NotFoundError(`No hospital id found: id ${id}`)

        return res.json({hospital})
    }catch(err){
        return next(err)
    }
})


router.delete("/:id", ensureAdmin, async function(req,res,next){
    try{
        const id = req.params.id
        const placeType = await DogHospital.type(id)
        if (placeType != "hospital") throw new BadRequestError(`you can only delete parks`)
        await DogHospital.remove(id)
        return res.json({deleted: `dog hospital id ${id}`})
    }catch(err){
        return next(err)
    }
})

router.post("/", ensureAdmin, async function(req,res,next){
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

router.patch("/:id", ensureAdmin, async function(req,res,next){
    try{
        const validator = jsonschema.validate(req.body, updateHospitalSchema);
        if (!validator.valid){
            const err = validator.errors.map(e => e.message)
            throw new BadRequestError(err)
        };

        const updatedHospital = await DogHospital.update(req.params.id,req.body);
        return res.json({updatedHospital})
    }catch(err){
        return next(err)
    }
})


module.exports = router


