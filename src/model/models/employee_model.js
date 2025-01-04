"use strict";


module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        name: DataTypes.STRING,
        hire_date: {
            type:DataTypes.DATE, 
            field: "hire_date"
        },
        position_id: {
            type: DataTypes.INTEGER,
            field: "position_id"
        },
        createdAt:{
            type:DataTypes.DATE,
            field:"created_at"
        },
        updatedAt:{
            type:DataTypes.DATE,
            field:"updated_at"
        }
    });
    Employee.associate = function(models){
        Employee.belongsTo(models.Position, {foreignKey: "position_id"})
    }

    return Employee;
}