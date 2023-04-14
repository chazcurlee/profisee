'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('customers', [
        {
          firstName: "Tony",
          lastName: "Hawk",
          address: "5543 Boardwalk St.",
          phone: "9135551234",
          startDate: "January 17th, 2020"
        },
        {
          firstName: "George",
          lastName: "Washington",
          address: "1 White House Way",
          phone: "2565558898",
          startDate: "April 1st, 2019"
        },
        {
          firstName: "Marilyn",
          lastName: "Monroe",
          address: "30 Rockefeller Way",
          phone: "2155555544",
          startDate: "November 5th, 2018"
        },


    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('customers', null, {});
     
  }
};
