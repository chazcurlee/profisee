'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    

      await queryInterface.bulkInsert('sales', [
        {
        productId: 1,
        salesPersonId: 1,
        customerId: 1,
        salesDate: "December 21st, 2021"
        },
        {
        productId: 3,
        salesPersonId: 3,
        customerId: 3,
        salesDate: "July 4th, 2018"
        },
        {
        productId: 2,
        salesPersonId: 2,
        customerId: 2,
        salesDate: "February 1st, 2023"
        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('sales', null, {});
     
  }
};
