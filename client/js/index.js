//import 'babel-polyfill';
var React = require("react");
var ReactDOM = require("react-dom");
import CheeseList from './components/cheese-list';


var cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];
console.log(CheeseList);
//console.log(`Client running in ${process.env.NODE_ENV} mode`);



document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<CheeseList cheeses={cheeses} />, document.getElementById("app"));
});
