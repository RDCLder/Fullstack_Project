"use strict";

module.exports = (sequelize, DataTypes) => {
    const moderator = sequelize.define(
        "moderator",
        {},
        {
            freezeTableName: true
        }
    );

    moderator.associate = models => {
        models.moderator.belongsTo(models.user, {
            foreignKey: "user_id",
            allowNull: false
        });
        models.moderator.belongsTo(models.community, {
            foreignKey: "community_id",
            allowNull: false
        });
    };
    return moderator;
};
