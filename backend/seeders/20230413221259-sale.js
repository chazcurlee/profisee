'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    

      await queryInterface.bulkInsert('sales', [
        {
        productId: 1,
        salesPersonId: 1,
        customerId: 1,
        salesDate: new Date()

        },
        {
        productId: 3,
        salesPersonId: 3,
        customerId: 3,
        salesDate: new Date()

        },
        {
        productId: 2,
        salesPersonId: 2,
        customerId: 2,
        salesDate: new Date()

        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('sales', null, {});
     
  }
};
