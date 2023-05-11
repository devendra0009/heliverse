const initialState = {
  team: [],
};

const team_reducer = (previousState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_TEAM':
      return {
        ...previousState,
        team:[...previousState.team, payload]
      };
    default:
      return previousState;
  }
};

export default team_reducer;
