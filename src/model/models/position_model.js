"use strict";


module.exports = (sequelize, DataTypes) => {
    const Positions = sequelize.define("Position", {
        title: DataTypes.STRING,
        salary: DataTypes.FLOAT,
        createdAt:{
            type:DataTypes.DATE,
            field:"created_at"
        },
        updatedAt:{
            type:DataTypes.DATE,
            field:"updated_at"
        }
    });
    Positions.associate = function(models){
        Positions.hasMany(models.Employee, {foreignKey:'position_id'})
    }

    return Positions;
}