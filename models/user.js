"use strict"

const db = require("../db");
const bcrypt = require("bcrypt");

const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError
} = require("../expressError");


const { BCRYPT_WORK_FACTOR } = require("../config");
const { sqlUpdateQuery } = require("../helpers/sqlpartialupdate");


class User{
    //** authenticate user */

    static async authenticate(username,password){

        // getting user information from database
        const result = await db.query(
            `SELECT username,
            password,
            first_name AS "firstName",
            last_name AS "lastName",
            email,
            is_admin,
            avatar_url AS avatarUrl
            FROM users WHERE username = $1`,
            [username]
        );

        const user = result.rows[0];

        // compare hashed password and giving password
        if(user){
            const isValid = await bcrypt.compare(password,user.password);
            if (isValid){
                delete user.password;
                return user;
            }
        };

        throw new UnauthorizedError("Invalid username/password");
    };


    //** Register user with user info */

    static async register({username,password,first_name,last_name,email,is_admin,avatar_url}){

        //**Check duplicate */
        const checkDuplicate = await db.query(
            `SELECT username FROM users WHERE username = $1`,
            [username]
        );

        if(checkDuplicate.rows[0]){
            throw new BadRequestError(`Duplicate username: ${username}`);
        }

        const hashedPassword = await bcrypt.hash(password,BCRYPT_WORK_FACTOR);

        const newUser = await db.query(
            `INSERT INTO users (
                    username,
                    password,
                    first_name,
                    last_name,
                    email,
                    is_admin,
                    avatar_url)
                VALUES($1,$2,$3,$4,$5,$6,$7)
                RETURNING username,first_name AS "firstName", last_name AS "lastName", email, is_admin AS "isAdmin"`,
                [
                    username,
                    hashedPassword,
                    first_name,
                    last_name,
                    email,
                    is_admin,
                    avatar_url
                ]
        );

        return newUser.rows[0];
    }

    //**Get all user */
    static async findAll(){
        const result = await db.query(
            `SELECT 
            username,
            first_name As firstName,
            last_name AS lastName,
            email,
            is_admin AS "isAdmin",
            avatar_url
            FROM users ORDER BY username`
        );

        return result.rows;
    }

    //**Get a specific user */
    static async get(username){
        const theUser = await db.query(
            `SELECT 
            username,
            first_name AS firstName,
            last_name AS lastName,
            email,
            is_admin AS isAdmin,
            avatar_url FROM users WHERE username = $1`,
            [username]
        );

        const user = theUser.rows[0];

        if(!user) throw new NotFoundError(`No username found: ${username}`);

        return user;
    }

    //** update a specific user/ 
    static async update(username,data){
        if(data.password){
            data.password = await bcrypt.hash(data.password,BCRYPT_WORK_FACTOR);
        }

        const {setCols,values} = sqlUpdateQuery(data);

        console.log(setCols)
        console.log(values)

        const usernameIndex = `$${values.length + 1}`

        const updateQuery = 
        `UPDATE users 
        SET ${setCols}
        WHERE username = ${usernameIndex}
        RETURNING username,
        first_name,
        last_name,
        email,
        is_admin,
        avatar_url`;

        const result = await db.query(updateQuery,[...values,username]);
        const updateUser = result.rows[0];

        if(!updateUser) throw new NotFoundError(`No user found: ${username}`)

        delete updateUser.password
        return updateUser;
    }

    //** delete a user/
    static async delete(username){
        const result = await db.query(`
        DELETE FROM users 
        WHERE username = $1 
        RETURNING username`,
        [username]);
        const user = result.rows[0];

        if(!user) throw NotFoundError(`no user found: ${username}`)
    }
};


module.exports = User;