export default (state, action) => {
  debugger;
  switch (action.type) {
    case "rotate":
      return {
        roatating: action.payload,
      };
    default:
      return state;
  }
};
