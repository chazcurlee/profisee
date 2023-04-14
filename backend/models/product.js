'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Sale, { foreignKey: 'productId'})
      Product.hasMany(models.Discount, { foreignKey: 'productId'})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    style: DataTypes.STRING,
    purchasePrice: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    currentQuantity: DataTypes.INTEGER,
    commissionPercent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};