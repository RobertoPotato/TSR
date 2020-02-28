import {
  ADD_GOAL,
  REMOVE_GOAL,
  UPDATE_GOAL,
  SHARE_GOAL,
  SET_GOALS
} from "../action/Goal_a";
import Goal from "../../models/Goals";
import { dummyGoal } from "../DummyData";

const initialState = {
  goalList: dummyGoal
};

const GoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goalList: state.goalList.concat(
          new Goal(
            action.payload.id,
            action.payload.title,
            action.payload.link,
            action.payload.createdDate,
            action.payload.activeOrComplete,
            action.payload.completedDate,
            action.payload.description
          )
        )
      };

    case SET_GOALS:
      return {
        goalList: action.goals
      };

    case REMOVE_GOAL:
      return {
        ...state,
        goalList: state.goalList.filter(item => item.key !== payload)
      };

    case UPDATE_GOAL:
      //logic
      return newGoalState;

    case SHARE_GOAL:
      //logic
      return newGoalState;

    default:
      return state;
  }
};

export default GoalReducer;
