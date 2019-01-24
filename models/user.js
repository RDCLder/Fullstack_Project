"use strict";

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            username: DataTypes.STRING(20),
            password: DataTypes.STRING,
            email: DataTypes.STRING(40),
            bio: DataTypes.STRING(500)
            
        },
        {
            freezeTableName: true
        }
    );

    user.associate = models => {
        models.user.hasMany(models.topic, {
            foreignKey: "author_id"
        });
        models.user.hasMany(models.comment, {
            foreignKey: "author_id"
        });
        models.user.hasMany(models.moderator, {
            foreignKey: "user_id"
        });
    };
    return user;
};
