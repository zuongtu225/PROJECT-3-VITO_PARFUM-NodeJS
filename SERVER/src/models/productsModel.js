"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsTo(models.Brands, {
        foreignKey: "brandId",
        targetKey: "id",
        as: "brands",
      });
      Products.belongsTo(models.Categories, {
        foreignKey: "categoryId",
        targetKey: "id",
        as: "categories",
      });
      Products.hasMany(models.Images, {
        foreignKey: "productId",
        sourceKey: "id",
        as: "images",
      });
      Products.hasMany(models.ProductSizes, {
        foreignKey: "productId",
        sourceKey: "id",
        as: "productSize",
      });
    }
  }
  Products.init(
    {
      categoryId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.BIGINT,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
