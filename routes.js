// require express module
const express = require("express");
// create a router object
const routes = express.Router();
// export the router object


const presidents = ["Washington", "Adams", "Jefferson"];


// get request to respond with the full array
routes.get("/presidents", (req, res) => {
    res.json(presidents);
});

// get request to respond with whatever message it's given
routes.get("/echo/:message", (req, res) => {
    // stores the message received into a variable
    let message = (req.params.message);
    res.send(message);
});


// get request to respond with the name of a president at the given index
routes.get("/presidents/:index", (req, res) => {
    // log the index given 
    const givenIndex = parseInt(req.params.index);

    // find the president with the matching index
    let index = null;
    let foundPresident = null;

    for (var i = 0; i < presidents.length; i++) {
        if (i === givenIndex) {
            index = i;
            foundPresident = presidents[i];
        }
    }

    if (foundPresident) {
        res.send(foundPresident)
    }

    else {
        res.status(404);
        res.send(`Index ${givenIndex} out of bounds`)
    }


});


const balloons = ["Birthday", "Graduation", "Baby"]


routes.get("/balloons", (req, res) => {
    res.json(balloons);
});


routes.delete("/balloons/:name", (req, res) => {

    let balloon = (req.params.name);
    let index = balloons.findIndex(b => b === balloon);
    balloons.splice(index, 1)
    res.send(`Deleted ${balloon}`);

});

routes.post("/fine/day", (req, res) => {
    const dayRating = req.body;
    res.json(dayRating);
    res.status(201);
})


routes.put("/extra", (req, res) => {
    const givenWord = req.body
    const response = [{ word: `${givenWord}`, extra: `More ${givenWord}!` }];
    res.send(response[0]);


})











module.exports = routes;