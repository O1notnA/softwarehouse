const {Employee, Position} = require ("../models")

const findAllEmployees = async(req, res)=>{
    try{
        const employees = await Employee.findAll({
            include: [Position],
        });
        res.json(employees);
    }
    catch(err){
        res.status(500).json({message:"Erro de banco de dados,findAllEmployees", error: err.message});
    }
}

const createEmployee = async(req, res)=>{
    try{
        await Employee.create(req.body);
        res.status(201);
    }
    catch(err){
        res.status(500).json({message:"Erro de banco de dados, createEmployee", error: err.message});
    }
}

const updateEmployee = async(req, res)=>{
    try{
        const [employee] = await Employee.update(req.body, {
            where:{id: req.params.id}
        });
        if (employee){
            const newEmployee = await Employee.findOne({
                where:{id:req.params.id}
            });
            res.json(newEmployee);
        }
        else{
            throw new Error("Employee não identificada");
        }
    }
    catch(err){
        res.status(500).json({message:"Erro de banco de dados, updateEmployee", error: err.message});
    }
}

const deleteEmployee = async(req, res)=>{
    try{
        const employeeDeleted = await Employee.destroy({
            where: {id: req.params.id}});

        if (employeeDeleted){
            res.status(204).send;
        }
        else{
            throw new Error("Employee não identificada");
        }
        res.json(employees);
    }
    catch(err){
        res.status(500).json({message:"Erro de banco de dados, deleteEmployee", error: err.message});
    }
}

module.exports = {findAllEmployees, createEmployee, updateEmployee, deleteEmployee}