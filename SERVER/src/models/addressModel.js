"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    static associate(models) {}
  }
  Addresses.init(
    {
      userId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Addresses",
    }
  );
  return Addresses;
};
