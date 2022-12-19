const { DataTypes} = require('sequelize')
    

module.exports = (sequelize)=>{
    sequelize.define('game', {
        game_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        score_Team_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score_Team_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        starts_at:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    });
    console.log('game model loaded');
};