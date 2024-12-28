const {readToken} = require("../utils/auth");

const middleware = async (req, res, next) =>{
    const token = req.headers.authorization;
    try{
        if (!token){
            throw new Error("User não autorizado");
        }
        const user = await readToken(token);
        req.user = user;
        next();
    }catch(error){
        return res.status(404).json({
            message: "Erro no middleware",
            erro: error});
    }

}

module.exports = middleware;