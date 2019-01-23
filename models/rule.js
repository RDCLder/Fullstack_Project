"use strict";

module.exports = (sequelize, DataTypes) => {
    const rule = sequelize.define(
        "rule",
        {
            name: DataTypes.STRING(100),
            body: DataTypes.STRING(200)
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
