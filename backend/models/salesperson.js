'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesPerson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SalesPerson.hasMany(models.Sale, { foreignKey: 'salesPersonId'})
    }
  }
  SalesPerson.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    startDate: DataTypes.STRING,
    termDate: DataTypes.STRING,
    manager: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SalesPerson',
    tableName: 'sales_person'
  });
  return SalesPerson;
};


