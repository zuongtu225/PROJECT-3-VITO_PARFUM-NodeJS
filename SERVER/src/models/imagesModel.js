"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.Products, {
        foreignKey: "productId",
        targetKey: "id",
        as: "products",
      });
    }
  }
  Images.init(
    {
      src: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Images",
    }
  );
  return Images;
};
