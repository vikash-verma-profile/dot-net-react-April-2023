export default (state, action) => {
  switch (action.type) {
    case "rotate":
      return {
        roatating: action.payload,
      };
    default:
      return state;
  }
};
