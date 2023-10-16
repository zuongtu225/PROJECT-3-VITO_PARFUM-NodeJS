"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    static associate(models) {
      Carts.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "id",
        as: "users",
      });
      Carts.belongsTo(models.ProductSizes, {
        foreignKey: "productSizeId",
        targetKey: "id",
        as: "productSizes",
      });
    }
  }
  Carts.init(
    {
      userId: DataTypes.INTEGER,
      productSizeId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Carts",
    }
  );
  return Carts;
};
