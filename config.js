"use strict"

// define secret key for jsonwebtoken
const SECRET_KEY = process.env.SECRET_KEY || "shumin-secret-dev-key";

// define default pork number
const PORT = +process.env.PORT || 3000;

// define DATABASE URL
function getDatabaseUri(){
    return (process.env.NODE_ENV === "test")
    ? "animal_parts_hospitals_test"
    : process.env.DATABASE_URI || "animal_parts_hospitals"
}

// define BCRYPT WORK FACTOR for bcrypt
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri
}

