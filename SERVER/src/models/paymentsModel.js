"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {}
  }
  Payments.init(
    {
      paymentMethod: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payments",
    }
  );
  return Payments;
};
