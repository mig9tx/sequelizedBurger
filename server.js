// Dependencies
//npm packages
// =============================================================
const express = require("express");


// Sets up the Express App
// =============================================================
const app = express();

app.use(express.static("public"));
var PORT = process.env.PORT || 8080;

//Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Static directory
app.use(express.static("public"));

//Routes

//import routes and give access to server 
require("./routes/api-routes.js")(app);

// app.use(routes);

//Syncing our sequelize models and then starting Express app
//Start server and begin listening to client requests
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        //log (server-dide) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });
});