"use strict";

module.exports = (sequelize, DataTypes) => {
    const community = sequelize.define(
        "community",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            freezeTableName: true
        }
    );

    community.associate = models => {
        models.community.hasMany(models.topic, {
            foreignKey: "community_id"
            //     as: 'community_id'
        });
    };
    community.associate = models => {
        models.community.hasMany(models.rule, {
            foreignKey: "community_id"
            //     as: 'community_id'
        });
    };
    return community;
};
