"use strict";

const db = require("../db");
const {BadRequestError} = require("../expressError");

class DogPlace {

    //** get all dog parks by default */
    static async getAll(type){
        let query = `SELECT * FROM dog_place_detail WHERE place_type = $1`

        const parks = await db.query(query,[type])
        return parks.rows;
    }

    //** Create new dog parks */
    static async createPlace({title,address,description,phone,city,place_type,zipcode}){
        //**Check duplicate */
        const duplicate = await db.query(
            `SELECT * FROM dog_place_detail WHERE title = $1`,
            [title]
        )

        if(duplicate.rows[0]) throw new BadRequestError(`Duplicate park name: ${title}`)

        const result = await db.query(
            `
            INSERT INTO dog_place_detail(title,address,description,phone,city,place_type,zipcode)
            VALUES($1,$2,$3,$4,$5,$6,$7)
            RETURNING *
            `,
            [
                title,
                address,
                description,
                phone,
                city,
                place_type,
                zipcode
            ]
        )

        return result.rows[0]
    }

};


module.exports = DogPlace;
