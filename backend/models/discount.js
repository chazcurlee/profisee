'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Discount.belongsTo(models.Product, { foreignKey: 'productId'})
    }
  }
  Discount.init({
    productId: DataTypes.INTEGER,
    beginDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    discountPercent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Discount',
    tableName: 'discounts'
  });
  return Discount;
};