"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(models) {
      OrderItems.belongsTo(models.Orders, {
        foreignKey: "codeOrder",
        targetKey: "codeOrder",
        as: "orderItem",
      });
      OrderItems.belongsTo(models.ProductSizes, {
        foreignKey: "productSizeId",
        targetKey: "id",
        as: "productSizes",
      });
    }
  }
  OrderItems.init(
    {
      codeOrder: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      productSizeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItems",
    }
  );
  return OrderItems;
};
