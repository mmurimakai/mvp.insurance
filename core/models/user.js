const sequelize = require("../db/config");
const { DataTypes } = require("sequelize");

const Address = sequelize.define("Address", {})
const ContactUser = sequelize.define("ContactUser", {})

const Client = sequelize.define("Policy", {
  contactInfo: {
  },
});

module.exports = { Client };
