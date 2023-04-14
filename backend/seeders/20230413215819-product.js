'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    

      await queryInterface.bulkInsert('products', [
        {
          name: 'Discover',
          manufacturer: 'Schwinn',
          style: "Road",
          purchasePrice: 200,
          salePrice: 500,
          currentQuantity: 10,
          commissionPercent: 20
        },
        {
          name: 'Zig Zag Ultegra',
          manufacturer: 'All-City',
          style: "Mountain",
          purchasePrice: 1000,
          salePrice: 4000,
          currentQuantity: 5,
          commissionPercent: 15
        },
        {
          name: 'C Line Explore',
          manufacturer: 'Brompton',
          style: "City",
          purchasePrice: 500,
          salePrice: 1750,
          currentQuantity: 6,
          commissionPercent: 25
        }

    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});
     
  }
};
