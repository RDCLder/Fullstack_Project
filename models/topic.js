'use strict';

module.exports = (sequelize, DataTypes) => {
  const topic = sequelize.define('topic', {
    tile: DataTypes.STRING
  }, {});

  topic.associate = (models) => {
    models.topic.belongsTo(models.community, {
      foreignKey: 'community_id', allowNull: false
    });
    models.topic.belongsTo(models.users, {
        foreignKey: 'author_id', allowNull: false
    });
  };
  return topic;
};