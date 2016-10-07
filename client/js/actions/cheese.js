var CHEESE = CHEESE;
var cheese = function(cheese){
    return {
        type: CHEESE,
        payload: cheese
    }
}

var FETCH_CHEESES_REQUEST = "FETCH_CHEESES_REQUEST";
var fetch_cheeses_request = function(cheese){
    return {
        type: FETCH_CHEESES_REQUEST,
        payload: cheese
        
    }
    
};

var FETCH_CHEESES_SUCCESS = "FETCH_CHEESES_SUCCESS";
var fetch_cheeses_success = function(success){
    return {
        type: FETCH_CHEESES_SUCCESS,
        payload: cheese
        
    }
    
};

var FETCH_CHEESES_ERROR = "FETCH_CHEESES_ERROR";
var fetch_cheeses_error = function(error){
    return {
        type: FETCH_CHEESES_ERROR,
        payload: error
        
    }
    
};

//async function
var fetch_cheeses = function(cheese){
    return function(dispatch){
        var url = "https://cheese-list-bealearnscode.c9users.io/cheeses";
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
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
    }
};