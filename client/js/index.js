//import 'babel-polyfill';
var React = require("react");
var ReactDOM = require("react-dom");
var CheeseList = require("./components/cheese-list");

var cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

//console.log(`Client running in ${process.env.NODE_ENV} mode`);


document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<CheeseList cheeses={cheeses}/>, document.getElementById("app"));
});
