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
      //TODO Add methods to load all the new bits being fetched to the store
      loadedGoals.push(
        new Goal(
          key,
          resData[key].title,
          resData[key].link,
          resData[key].createdDate,
          resData[key].activeOrComplete,
          resData[key].completedDate,
          resData[key].description
        )
      );
    }
    dispatch({ type: SET_GOALS, goals: loadedGoals });
  };
};

export const addGoal = (
  title,
  link,
  createdDate,
  activeOrComplete,
  completedDate,
  description
) => {
  return async dispatch => {
    const response = await fetch(
      "https://rn-goally-app.firebaseio.com/goals.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          link,
          createdDate,
          activeOrComplete,
          completedDate,
          description
        })
      }
    );

    const resData = await response.json();

    dispatch({
      type: ADD_GOAL,
      payload: {
        id: resData.name,
        title,
        link,
        createdDate,
        activeOrComplete,
        completedDate,
        description
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
