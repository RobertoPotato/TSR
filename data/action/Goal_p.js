import { ADD_GOAL, REMOVE_GOAL, UPDATE_GOAL, SHARE_GOAL } from "./Goal_a";

/*
export const addGoal = goal => ({
  type: ADD_GOAL,
  payload: goal
});
*/

export const addGoal = goal => {
  return async disptch => {
    //any async code can be run here
    const response = await fetch(
      "https://rn-goally-app.firebaseio.com/goals.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          goal
        })
      }
    );

    const resData = await response.json();

    disptch({
      type: ADD_GOAL,
      payload: goal
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
