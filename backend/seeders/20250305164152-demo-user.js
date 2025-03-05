const bcrypt = require("bcryptjs");

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const salt = bcrypt.genSaltSync(10); 

    // Passwords 
    const farhanPassword = bcrypt.hashSync("Farhan@1998", salt); 
    const faizanPassword = bcrypt.hashSync("f1Racing", salt); 
    const roryPassword = bcrypt.hashSync("roryPassword", salt); 
    const michaelPassword = bcrypt.hashSync("michaelPassword", salt); 

    return queryInterface.bulkInsert("Users", [
      {
        username: "hasanfarhan33", 
        password: farhanPassword, 
        email: "hasanfarhan33@gmail.com", 
        first_name: "Farhan",
        last_name: "Hasan",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        username: "faizanDude11", 
        password: faizanPassword,
        email: "faizandude11@gmail.com",
        first_name: "Faizan", 
        last_name: "Hasan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "roryMcDonnell1", 
        password: roryPassword, 
        email: "rory.mcdonnell@gmail.com",
        first_name: "Rory", 
        last_name: "McDonnell",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        username: "michaelGuerin1",
        password: michaelPassword,
        email: "michael.guerin@gmail.com", 
        first_name: "Michael", 
        last_name: "Guerin",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("Users", null, {});
  }
};
