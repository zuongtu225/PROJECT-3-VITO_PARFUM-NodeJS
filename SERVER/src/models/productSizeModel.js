"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductSizes extends Model {
    static associate(models) {
      ProductSizes.belongsTo(models.Products, {
        foreignKey: "productId",
        as: "products",
      });
      ProductSizes.belongsTo(models.Sizes, {
        foreignKey: "sizeId",
        as: "sizes",
      });
    }
  }
  ProductSizes.init(
    {
      productId: DataTypes.BIGINT,
      sizeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductSizes",
    }
  );
  return ProductSizes;
};
