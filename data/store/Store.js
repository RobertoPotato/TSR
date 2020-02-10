import { createStore, combineReducers } from "redux";
import GoalReducer from "../reducer/Goal_R";

const rootReducer = combineReducers({
  GoalsReducer: GoalReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
