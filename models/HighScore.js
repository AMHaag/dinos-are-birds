const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class HighScore extends Model {}
HighScore.init({
    id:{
        type:DataTypes.INTERGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },score:{
        type:DataTypes.INTERGER,
        allowNull:false,
        validate:{
            isInt:true,
            min:1,
        }
    },user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'id'
        },

    }
},{
    sequelize,
    timestamps:true,
    freezeTableName:true,
    underscored:true,
    modelName:'highscores'
})

module.exports = HighScore