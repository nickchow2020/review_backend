"use strict";

const db = require("../db");
const {sqlUpdateQuery} = require("../helpers/sqlpartialupdate");
const {BadRequestError, NotFoundError} = require("../expressError");

class DogPlace {

    //**get all dog parks by default */
    static async getAll(type){
        let query = `SELECT * FROM dog_place_detail WHERE place_type = $1`

        const parks = await db.query(query,[type])
        return parks.rows;
    }

    //**Create new dog parks */
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

    //**get a specific dog place */
    static async get(id){
        const dogPlace = await db.query(
            `SELECT * FROM dog_place_detail WHERE id = $1`,
            [id]
        );

        const result = dogPlace.rows[0];

        if (!result) throw new NotFoundError(`No result found where id: ${id}`);

        return result;
    }

    //** delete dog place  */
    static async remove(id){
        const targetPlace = await db.query(
            `DELETE 
            FROM dog_place_detail 
            WHERE id = $1
            RETURNING id`,
            [id]
        );

        const result = targetPlace.rows[0];

        if (!result) throw new NotFoundError(`No dog place id ${id}`)
    }


    //** return the dog place type*/
    static async type(id){
        const targetPlace = await db.query(
            `SELECT * FROM dog_place_detail WHERE id = $1`,
            [id]
        )

        const result = targetPlace.rows[0];

        if (!result) throw new NotFoundError(`dog place id : ${id} not found`)

        return result.place_type;
    }


    //** Update dog place */
    static async update(id,data){
        const {setCols, values} = sqlUpdateQuery(data);
        const sqlQuery = `
            UPDATE dog_place_detail
            SET ${setCols}
            WHERE id = ${id}
            RETURNING *;
        `

        const result = await db.query(sqlQuery,[...values]);
        const dogPlace = result.rows[0];

        if (!dogPlace) throw new NotFoundError(`No dog place found id: ${id}`);

        return dogPlace;
    }

    //** Get top 6 */
    static async topSix(type){
        const sqlQuery = `
        SELECT COUNT(*) total,
        ROUND(AVG(r.score)) AS avg_score,
        d.title,
        d.id,
        left(d.description,100) AS description,
        image_url
        FROM review_comments r 
        JOIN dog_place_detail d 
        ON r.dog_place_id =d.id
        JOIN dog_place_image i
        ON i.place_id = d.id
        WHERE d.place_type = $1  
        GROUP BY r.score,d.title,d.description,d.id,image_url
        ORDER BY avg_score desc LIMIT 6;
        `

        const result = await db.query(sqlQuery,[type]);
        return result.rows;
    }
};


module.exports = DogPlace;
