/**
 * 
 * ExpressError extends normal Error handling 
 * 
 */

class ExpressError extends Error{
    constructor(message,status){
        super();
        this.message = message;
        this.status = status;
    }
}


/**
 * 
 * ExpressError extends 404 handling
 * 
 */

class NotFoundError extends ExpressError {
    constructor(message = "Not Found"){
        super(message,404)
    }
}


/**
 * 
 * ExpressError extends Error handling Unauthorized
 * 
 */

class UnauthorizedError extends ExpressError {
    constructor(message="Unauthorized"){
        super(message,401)
    }
}

/**
 * 
 * ExpressError extends Error handling Bad Request
 * 
 */

class BadRequestError extends ExpressError {
    constructor(message = "Bad Request"){
        super(message,400)
    }
}

/**
 * 
 * ExpressError extends Error handle 403 bad request error
 * 
 */

class ForbiddenError extends ExpressError {
    constructor(message = "Bad Request"){
        super(message,403)
    }
}


module.exports = {
    ExpressError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError
}