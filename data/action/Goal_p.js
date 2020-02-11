import {
  ADD_GOAL,
  REMOVE_GOAL,
  UPDATE_GOAL,
  SHARE_GOAL,
  SET_GOALS
} from "./Goal_a";
import Goal from "../../models/Goals";

export const fetchGoals = () => {
  return async dispatch => {
    //any async code can be run here
    const response = await fetch(
      "https://rn-goally-app.firebaseio.com/goals.json"
    );

    const resData = await response.json();
    const loadedGoals = [];

    for (const key in resData) {
      loadedGoals.push(new Goal(key, resData[key].title, resData[key].link));
    }
    dispatch({ type: SET_GOALS, goals: loadedGoals });
  };
};

export const addGoal = (title, link) => {
  return async dispatch => {
    //any async code can be run here
    const response = await fetch(
      "https://rn-goally-app.firebaseio.com/goals.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          link
        })
      }
    );

    const resData = await response.json();

    dispatch({
      type: ADD_GOAL,
      payload: {
        id: resData.name,
        title,
        link
      }
    });
  };
};

export const removeGoal = key => ({
  type: REMOVE_GOAL,
  payload: key
});

export const updateGoal = key => ({
  type: UPDATE_GOAL,
  payload: key
});

export const shareGoal = key => ({
  type: SHARE_GOAL,
  payload: key
});
