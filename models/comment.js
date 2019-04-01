"use strict";

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define(
        "comment",
        {
            body: {
                type: DataTypes.STRING(2000),
                allowNull: false
            }
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
