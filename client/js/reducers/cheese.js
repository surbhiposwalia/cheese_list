var actions = require('../actions/cheese.js');

var FETCH_CHEESES_REQUEST = actions.FETCH_CHEESES_REQUEST;
var FETCH_CHEESES_SUCCESS = actions.FETCH_CHEESES_SUCCESS;
var FETCH_CHEESES_ERROR = actions.FETCH_CHEESES_ERROR;


var initialCheeseState = {
    cheeses: [],
    loading: false,
    error: null
};

var cheeseReducer = function(state, action) {
    state = state || initialCheeseState;
    if (action.type === FETCH_CHEESES_REQUEST) {
       var newState = Object.assign({}, state, {loading: true});
        return newState;
}
    if (action.type === FETCH_CHEESES_SUCCESS) {
        var newState = Object.assign({}, state, {loading: false , error: null});
        return newState;
    }
    
    
    return state;
};

// The cheeses property of the state to be equal to the fetched list of cheeses.
// On fetchCheesesError it should set:
// The loading property of the state to be false.
// The error property of the state to be equal to the error message received.
// In client/js/index.js, create a store which uses your reducer.
// Don't forget to apply the Redux Thunk middleware so your async actions work.

exports.cheeseReducer = cheeseReducer;