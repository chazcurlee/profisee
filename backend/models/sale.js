'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sale.belongsTo(models.Product, { foreignKey: 'productId'})
      Sale.belongsTo(models.SalesPErson, { foreignKey: 'salesPersonId'})
      Sale.belongsTo(models.Customer, { foreignKey: 'customerId'})
    }
  }
  Sale.init({
    productId: DataTypes.INTEGER,
    salesPersonId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    salesDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales'
  });
  return Sale;
};