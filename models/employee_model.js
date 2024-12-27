"use strict";


module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        name: DataTypes.STRING,
        hire_date: DataTypes.DATE,
        position_id: {
            type: DataTypes.INTERGER,
            field: "position_id"
        }
    });
    Employee.associate = function(models){
        Employee.belongsTo(models.Position, {foreignKey: "position_id"})
    }
}