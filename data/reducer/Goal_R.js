import {
  ADD_GOAL,
  REMOVE_GOAL,
  UPDATE_GOAL,
  SHARE_GOAL
} from "../action/Goal_a";

const initialState = {
  goalList: []
};

const GoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goalList: state.goalList.concat({
          key: Math.random(),
          title: action.payload
        })
      };

    case REMOVE_GOAL:
      //logic
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
