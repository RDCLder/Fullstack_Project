'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    });

    users.associate = (models) => {
        models.users.hasMany(models.topic, {
            foreignKey: 'id',
            as: 'author_id'
        });
        models.users.hasMany(models.comment)
    };
    return users;
};