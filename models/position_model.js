"use strict";


module.exports = (sequelize, DataTypes) => {
    const Positions = sequelize.define("Position", {
        title: DataTypes.STRING,
        salary: DataTypes.FLOAT,
    });
    Positions.associate = function(models){
        Positions.hasMany(models.Employee, {foreignKey:'position_id'})
    }
}