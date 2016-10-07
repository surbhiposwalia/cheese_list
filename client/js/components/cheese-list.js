var React = require("react");
var ReactDOM = require("react-dom");



var CheeseList = React.createClass({
    render: function(props){
        //var doubles = numbers.map(function(num) {
        //return num * 2;
        var cheese = this.props.cheeses.map(function(cheese){
            return cheese
        });
        console.log(cheese);
        return (
            <ul>
                <li>{this.cheese}</li>
            </ul>
            )
    }
});

exports.CheeseList = CheeseList;

