'use strict';

module.exports = (sequelize, DataTypes) => {
    const community = sequelize.define('community', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    });

    community.associate = (models) => {
        models.community.hasMany(models.topic, {
            foreignKey: 'id',
            as: 'community_id'
        });
    };
    return community;
};