const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('team',{
        team_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        region:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        flag:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });
    console.log('team model loaded');
}