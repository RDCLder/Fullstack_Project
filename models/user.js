"use strict";

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            username: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
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
