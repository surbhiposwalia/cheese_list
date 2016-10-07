var fetch =require('isomorphic-fetch');

// var FETCH_CHEESES = "FETCH_CHEESES";
// var fetch_cheeses = function(cheese){
//     return {
//         type: FETCH_CHEESES,
//         payload: cheese
//     }
// }

var FETCH_CHEESES_REQUEST = "FETCH_CHEESES_REQUEST";
var fetch_cheeses_request = function(cheese){
    return {
        type: FETCH_CHEESES_REQUEST,
        payload: cheese
        
    };
    
};

var FETCH_CHEESES_SUCCESS = "FETCH_CHEESES_SUCCESS";
var fetch_cheeses_success = function(cheese){
    return {
        type: FETCH_CHEESES_SUCCESS,
        payload: cheese
        
    };
    
};

var FETCH_CHEESES_ERROR = "FETCH_CHEESES_ERROR";
var fetch_cheeses_error = function(error){
    return {
        type: FETCH_CHEESES_ERROR,
        payload: error
        
    };
    
};

//async function
var fetch_cheeses = function(cheese){
    return function(dispatch){
        var url = "https://cheese-list-bealearnscode.c9users.io/cheeses";
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var cheeses = data.cheeses;
            return dispatch(
                fetch_cheeses_success(cheeses)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetch_cheeses_error(error)
            );
        });
    };
};


exports.FETCH_CHEESES_REQUEST = FETCH_CHEESES_REQUEST;
exports.fetch_cheeses_request = fetch_cheeses_request;

exports.FETCH_CHEESES_SUCCESS = FETCH_CHEESES_SUCCESS;
exports.fetch_cheeses_success = fetch_cheeses_success;

exports.FETCH_CHEESES_ERROR = FETCH_CHEESES_ERROR;
exports.fetch_cheeses_error = fetch_cheeses_error;
