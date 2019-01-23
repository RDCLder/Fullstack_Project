"use strict";

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define(
        "comment",
        {
            body: DataTypes.STRING(2000)
        },
        {
            freezeTableName: true
        }
    );

    comment.associate = models => {
        models.comment.belongsTo(models.user, {
            foreignKey: "author_id",
            allowNull: false
        });
        models.comment.belongsTo(models.topic, {
            foreignKey: "topic_id",
            allowNull: false
        });
        models.comment.belongsTo(models.comment, {
            foreignKey: "parent_id",
            allowNull: true
        });
    };
    return comment;
};
