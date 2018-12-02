//Dependencies
//===========================================

//Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references connection to db
// var sequelize = require();

//Export the database function for the contorller (burgersController.js)
// module.exports = burger;

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};