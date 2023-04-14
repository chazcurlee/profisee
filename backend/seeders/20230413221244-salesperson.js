'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('sales_person', [
        {
          firstName: "John",
          lastName: "Doe",
          address: "123 Main St.",
          phone: "6785551234",
          startDate: "August 8th, 2021",
          termDate: null,
          manager: "Bob Odenkirk"
        },
        {
          firstName: "Chaz",
          lastName: "Curlee",
          address: "321 Peachtree St.",
          phone: "6785554321",
          startDate: "October 28th, 2022",
          termDate: null,
          manager: "Bob Odenkirk"
        },
        {
          firstName: "Walter",
          lastName: "White",
          address: "4545 Blueglass Dr.",
          phone: "6785551122",
          startDate: "September 29th, 2013",
          termDate: null,
          manager: "Bob Odenkirk"
        }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('sales_person', null, {});
     
  }
};
