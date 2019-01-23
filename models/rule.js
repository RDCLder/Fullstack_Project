"use strict";

module.exports = (sequelize, DataTypes) => {
    const rule = sequelize.define(
        "rule",
        {
            tile: DataTypes.STRING
        },
        {
            freezeTableName: true
        }
    );

    rule.associate = models => {
        models.rule.belongsTo(models.community, {
            foreignKey: "community_id",
            allowNull: false
        });
    };
    return rule;
};
