"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    static associate(models) {}
  }

  Brands.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Brands",
    }
  );
  return Brands;
};
