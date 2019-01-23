'use strict';
module.exports = (sequelize, DataTypes) => {
  const rule = sequelize.define('rule', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  rule.associate = function(models) {
    // associations can be defined here
  };
  return rule;
};