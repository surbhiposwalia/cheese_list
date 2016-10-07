var React = require("react");
var ReactDOM = require("react-dom");


const CheeseList = (props) => {
    console.log(props.cheeses);

    return (
                    <ul>
                    {
                       props.cheeses.map((cheeses) =>{
                           return  <li key={cheeses}>{cheeses}</li>
                       })
                    }
               
            </ul>
        );
};

// var CheeseList = function(props){
//         //var doubles = numbers.map(function(num) {
//         //return num * 2;
//         console.log(props)
//     //     var cheeselist = this.props.cheeses.map(function(cheese){
//     //          var cheese=cheese;
//     //          return cheese;
//     //     });
       
//         return ( 
//             <ul>
//                 <li>ghjfg</li>
//             </ul>
//             )
//      }


export default CheeseList;

