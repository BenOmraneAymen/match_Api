function applyExtraSetup(sequelize) {
    const { sport, team, field, game } = sequelize.models;

    /*
    game.belongsTo(team, {foreignKey: 'team1_id', sourceKey: 'team_id'});
    game.belongsTo(team, {foreignKey: 'team2_id', sourceKey: 'team_id'});
    game.belongsTo(sport, {foreignKey: 'sport_id', sourceKey: 'sport_id'});
    game.belongsTo(field, {foreignKey: 'field_id', sourceKey: 'field_id'});
    */
    
    team.hasMany(game, {foreignKey: 'team1_id', sourceKey: 'team_id'});
    team.hasMany(game, {foreignKey: 'team2_id', sourceKey: 'team_id'});
    sport.hasMany(game, {foreignKey: 'sport_id', sourceKey: 'sport_id'});
    field.hasMany(game, {foreignKey: 'field_id', sourceKey: 'field_id'});
    
    sport.sync();
    team.sync();
    field.sync();
    game.sync();
}

module.exports = { applyExtraSetup }