// include the express module
const express = require("express");
// creates an express application
const app = express();
// recognize incoming requests as JSON
app.use(express.json());
// listen for port connection
const port = 3000;
app.listen(port, () => {
    console.log("Server started http://localhost:" + port);
});



// require the router
const routes = require("./routes");

// use the routes
app.use("/", routes);


