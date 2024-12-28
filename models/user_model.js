"use strict";


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
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

    return User;
}