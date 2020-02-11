import { createStore, combineReducers, applyMiddleware } from "redux";
import GoalReducer from "../reducer/Goal_R";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  GoalsReducer: GoalReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(ReduxThunk));

export default configureStore;
