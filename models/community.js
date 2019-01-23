"use strict";

module.exports = (sequelize, DataTypes) => {
    const community = sequelize.define(
        "community",
        {
            name: DataTypes.STRING(40),
            description: DataTypes.STRING(10000)
        },
        {
            freezeTableName: true
        }
    );

    community.associate = models => {
        models.community.hasMany(models.topic, {
            foreignKey: "community_id"
        });
        models.community.hasMany(models.rule, {
            foreignKey: "community_id"
        });
        models.community.hasMany(models.moderator, {
            foreignKey: "community_id"
        });
    };
    return community;
};
