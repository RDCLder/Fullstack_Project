"use strict";

module.exports = (sequelize, DataTypes) => {
    const topic = sequelize.define(
        "topic",
        {
            tile: DataTypes.STRING
        },
        {
            freezeTableName: true
        }
    );

    topic.associate = models => {
        models.topic.belongsTo(models.community, {
            foreignKey: "community_id",
            allowNull: false
        });
        models.topic.belongsTo(models.user, {
            foreignKey: "author_id",
            allowNull: false
        });
    };
    return topic;
};
