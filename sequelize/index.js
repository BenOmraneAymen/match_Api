const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('test','admin','Admin_123', {
    dialect: 'mysql',
    host:'localhost',    
})

const modelDefiners = [
	require('./models/sport.model'),
	require('./models/game.model'),
	require('./models/team.model'),
	require('./models/field.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;