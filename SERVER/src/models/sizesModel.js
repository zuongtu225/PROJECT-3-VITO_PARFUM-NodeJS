"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sizes extends Model {
    static associate(models) {
      Sizes.hasMany(models.ProductSizes, {
        foreignKey: "sizeId",
        as: "products",
      });
    }
  }
  Sizes.init(
    {
      size: DataTypes.STRING,
      percent: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sizes",
    }
  );
  return Sizes;
};
