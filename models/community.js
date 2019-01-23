'use strict';
module.exports = (sequelize, DataTypes) => {
  const community = sequelize.define('community', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  community.associate = function(models) {
    // associations can be defined here
  };
  return community;
};