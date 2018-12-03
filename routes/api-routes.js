// const express = require("express");

// const router = express.Router();

//Import the model (burger.js) to use its database functions.
const db = require("../models");

//Creat all rooutes and set up logic within the routes required.

module.exports = function (app) {

    // GET route for getting all of the burgers
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
            const hbsObject = {
                burgers: dbBurger
            };
            res.render("index", hbsObject);
            console.log(res);
            
        }).catch (function(error){
            console.log(error);
        });
    });

    app.post("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured,
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

}