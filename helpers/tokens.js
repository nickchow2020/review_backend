const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require("../config");


//** return signed JWT user token */
function createToken(user){

    let payload = {
        username: user.username,
        isAdmin: user.is_admin || false
    };

    return jwt.sign(payload,SECRET_KEY);
};

module.exports = {createToken};