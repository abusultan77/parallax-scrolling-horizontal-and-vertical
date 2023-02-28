let initState = {
  GetUserAll: [],
};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action; //object destructring
  switch (type) {
    case "GETUSER":
      return {
        ...state,
        GetUserAll: payload,
      };
    case "USER_REWARD":
      
      return {
        ...state,
        reward: payload,
      };

    default:
      return state;
  }
};