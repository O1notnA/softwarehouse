//const { Model, HostNotFoundError } = require("sequelize");
const {Position} = require ("../models")

const findAllPositions = async(req, res)=>{
    try{
        const positions = await Position.findAll();
        res.json(positions);
    }
    catch(err){
        res.status(500).json({
            message:"Erro de banco de dados, findAllPositions",
            error: err.message});
    }
}

const updatePosition = async(req, res)=>{
    try{
        const [position] = await Position.update(req.body, {
            where:{id: req.params.id}
        });
        if (position){
            const newPosition = await Position.findOne({
                where:{id:req.params.id}
            });
            res.json(newPosition);
        }
        else{
            throw new Error("Position não identificada");
        }
    }
    catch(err){
        res.status(500).json({
            message:"Erro de banco de dados, updatePosition", 
            error: err.message});
    }
}

const deletePosition = async(req, res)=>{
    try{
        const positionDeleted = await Position.destroy({
            where: {id: req.params.id}});

        if (positionDeleted){
            res.status(204).send;
        }
        else{
            throw new Error("Position não identificada");
        }
        res.json(positions);
    }
    catch(err){
        res.status(500).json({
            message:"Erro de banco de dados, deletePosition", 
            error: err.message});
    }
}

const createPosition = async(req, res)=>{
    try{
        await Position.create(req.body);
        res.status(201);
    }
    catch(err){
        res.status(500).json({
            message:"Erro de banco de dados, createPosition", 
            error: err.message});
    }
}

module.exports = {findAllPositions, updatePosition, deletePosition, createPosition}