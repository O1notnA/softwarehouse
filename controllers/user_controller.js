const {User} = require('../models');
const bcrypt = require('bcrypt');
const auth = require('../utils/auth');


const login_user = async (req, res) =>{
    try{
        const {name, password} = req.body;
        if(!name || !password) throw new Error("Login e senha não correspondentes");

        const user = await User.findOne({where:{
            name
        }});
        if (user){
            const passwordValid = bcrypt.compareSync(password, user.password);
            if (passwordValid){
                const token = auth.generateToken(user.name);
                return res.json(token).status(200);
            }else{
                throw new Error("Senha incorreta");
            }
        }
    }catch(error){
        res.status(500).json({
            message: "Erro com o banco de dados na function login",
            error: error.message
        });
    }  
}

const createUser = async (req, res) =>{
    try{
        const {name, password} = req.body;
        if(!name || !password) throw new Error("Login e senha obrigatórios");
        const passwordHash = bcrypt.hashSync(password, 8);
        User.create({name, password:passwordHash});
        res.status(201).json({message: "Usuário criado com sucesso."}).send;
    }catch(error){
        res.status(500).json({
            message: "Erro ao criar usuário",
            error: error.message
        });
    }
    
}

module.exports = {login_user, createUser}