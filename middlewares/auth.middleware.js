const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (
        req.path === "/auth/login" ||
        req.path === "/auth/register" ||
        req.path.includes("foods") ||
        req.path.includes('categories')
    ) {
        console.log("next");
        return next();
    }

    const authorizationHeader = req.headers['authorization'];
    
    const token = authorizationHeader.split(' ')[1].trim();
    if(!token) {
        res.status(401).json({message: "Unknown Error"});
        return;
    }

    jwt.verify(token, "dobadov3", (err, data) => {
        if(err) {
            res.status(401).json({message: err.message});
            return;
        }else{
            next();
        }
    });

}