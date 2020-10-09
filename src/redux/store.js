import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {
    heroes: [],
    error: "",
};
const middleware = [thunk];

let dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HEROES":
            return {
                ...state,
                heroes: action.payload,
            };
        case "FAIL_HEROES":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(
  dataReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;