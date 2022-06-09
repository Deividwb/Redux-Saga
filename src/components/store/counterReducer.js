const INITIAL_STATE = {
  scoreReducerPlayOne: 0,
  scoreReducerPlayTwo: 0,
};

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT_ONE":
      return { ...state, scoreReducerPlayOne: state.scoreReducerPlayOne + 1 };
    case "INCREMENT_TWO":
      return { ...state, scoreReducerPlayTwo: state.scoreReducerPlayTwo + 1 };

    default:
      return state;
  }
}

export const scorePlayOne = () => {
  return {
    type: "INCREMENT_ONE",
  };
};

export const scorePlayTwo = () => {
  return {
    type: "INCREMENT_TWO",
  };
};
