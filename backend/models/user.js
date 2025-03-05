const bcrypt = require("bcryptjs"); 

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true, 
      validate: {isEmail: true}
    },
    first_name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(); 
        user.password = await bcrypt.hash(user.password, salt); 
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};