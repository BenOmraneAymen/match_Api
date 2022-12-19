const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('field', {
        field_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    });
    console.log('field model loaded');
}