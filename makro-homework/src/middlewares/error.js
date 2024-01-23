const errorHandler = (err, req, res, next)=> {
    // if(err.name === "TOKEN error"){
    //     err.statusCode = 400;
    //     err.message = "Token error"
    // }
    
    res
        .status(err.statusCode || 500)
        .json({message: err.message || "Internal Server Error"});
};

module.exports = errorHandler;