'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    

      await queryInterface.bulkInsert('discounts', [
        {
          productId: 1,
          beginDate: "January 1st, 2023",
          endDate: "December 31st, 2023",
          discountPercent: 10
        },
        {
          productId: 2,
          beginDate: "April 13th, 2023",
          endDate: "May 13th, 2023",
          discountPercent: 15
        },
        {
          productId: 3,
          beginDate: "April 17th, 2023",
          endDate: "April 24th, 2023",
          discountPercent: 20
        },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('discounts', null, {});
     
  }
};
