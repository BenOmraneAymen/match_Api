const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('sport', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
    });
    console.log('sport model loaded');
};