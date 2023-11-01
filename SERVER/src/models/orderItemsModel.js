"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(models) {
      OrderItems.belongsTo(models.Orders, {
        foreignKey: "orderId",
        targetKey: "id",
        as: "orderItems",
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
      orderId: DataTypes.INTEGER,
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
