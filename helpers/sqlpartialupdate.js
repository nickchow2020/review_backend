const { BadRequestError } = require("../expressError")


// function that convert javascript data script into sql injection.
function sqlUpdateQuery(data){
    const keys = Object.keys(data);

    if(keys.length === 0) throw new BadRequestError("Please Provide a Data");

    const sqlInjection = keys.map((colName,index) => `${colName}=$${index + 1}`);

    return {
        setCols: sqlInjection.join(", "),
        values: Object.values(data)
    };
}

module.exports = {sqlUpdateQuery}