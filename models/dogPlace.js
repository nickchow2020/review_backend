"use strict";

const db = require("../db");
const {sqlUpdateQuery} = require("../helpers/sqlpartialupdate");
const {BadRequestError, NotFoundError} = require("../expressError");

class DogPlace {

    //**get all dog parks by default */
    static async getAll(type){
        let query = `
        SELECT d.id,
        d.title,
        d.description,
        i.image_url,
        ROUND(AVG(c.score)) AS avg_score,
        d.lat AS latitude,
        d.lng AS longitude
        FROM dog_place_detail d 
        JOIN dog_place_image i 
        ON i.place_id = d.id 
        JOIN review_comments c 
        ON c.dog_place_id = d.id 
        WHERE place_type = $1 AND i.image_url LIKE '%_1.jpeg' 
        GROUP BY c.dog_place_id,d.id,d.description,i.image_url;
        `

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
        let query =`
        SELECT 
        d.title, 
        d.description, 
        d.place_type,
        d.address, 
        d.phone, 
        c.city,
        t.state,
        d.zipcode,
        d.lat,
        d.lng 
        FROM dog_place_detail d 
        JOIN cities c 
        ON c.id = d.city 
        JOIN counties t 
        ON t.id = c.county 
        WHERE d.id = $1;
        `
        const dogPlace = await db.query(query,[id]);

        const dogPlaceImage = await db.query(`SELECT image_url FROM dog_place_image WHERE place_id = $1;`,[id]);

        const DogPlaceImageResult = dogPlaceImage.rows.map(data => data.image_url);

        const DogPlaceComments = await db.query(`
        SELECT 
        u.id AS user_id,
        u.first_name,
        u.last_name,
        u.avatar_url,
        c.id AS comment_id,
        c.score,
        c.comment,
        l.likes,
        l.dislikes
        FROM review_comments c 
        JOIN users u 
        ON c.user_id = u.id
        JOIN comment_likes l 
        ON l.comment_id = c.id
        WHERE c.dog_place_id = $1
        ORDER BY comment_id desc`,[id])

        const userComment = DogPlaceComments.rows;

        const result = dogPlace.rows[0];

        if (!result) throw new NotFoundError(`No result found where id: ${id}`);

        const NeededData = {
            ...result,
            image:DogPlaceImageResult,
            comments:userComment
        }

        return NeededData;
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

    //**UPDATE top Likes */
    static async updateLikes(id,likes,dislikes){
        const query = 
        `UPDATE comment_likes
        SET likes = $1, dislikes=$2
        WHERE comment_id = $3
        RETURNING *`;

        const result = await db.query(query,[likes,dislikes,id]);

        return result.rows[0];
    }

    //**Add new comment */
    static async addNewComment(user_id,place_id,score=5,comment){
        const query = `
        INSERT INTO review_comments(user_id,dog_place_id,score,comment)
        VALUES ($1,$2,$3,$4)
        RETURNING *`;

        const result = await db.query(query,[user_id,place_id,score,comment]);
        const comment_id = result.rows[0].id;
        
        await db.query(`
        INSERT INTO comment_likes(comment_id,likes,dislikes)
        VALUES($1,$2,$3)
        `,[comment_id,0,0])
        
        return result.rows[0]
    }

    //**Search for dog place */
    static async searchForDogPlace(key){

        let query = `
        SELECT d.id,
        d.title,
        d.description,
        i.image_url,
        ROUND(AVG(c.score)) AS avg_score,
        d.lat AS latitude,
        d.lng AS longitude,
        d.place_type
        FROM dog_place_detail d 
        JOIN dog_place_image i 
        ON i.place_id = d.id 
        JOIN review_comments c 
        ON c.dog_place_id = d.id 
        WHERE d.title ILIKE '%${key}%' AND i.image_url LIKE '%_1.jpeg' 
        GROUP BY c.dog_place_id,d.id,d.description,i.image_url;
        `

        const searchResult = await db.query(query);

        const isValidSearch = searchResult.rows[0];

        if (!isValidSearch) throw new NotFoundError(`No dog place found on key ${key}`);

        return searchResult.rows;
    }
};


module.exports = DogPlace;
