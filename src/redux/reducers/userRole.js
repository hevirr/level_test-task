const initialState = {
  userRole: "",
};

const userRole = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ROLE":
      return {
        ...state,
        userRole: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userRole;
