"use strict";

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            freezeTableName: true
        }
    );

    user.associate = models => {
        models.user.hasMany(models.topic, {
            foreignKey: "author_id"
            //     as: 'author_id'
        });
        models.user.hasMany(models.comment, {
            foreignKey: "author_id"
        });
    };
    return user;
};
