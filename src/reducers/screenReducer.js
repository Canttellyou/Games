const initialState = {
  screenshot: { results: [] },
};
const screenShotReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCREENSHOTS":
      return {
        screenshot: action.payload.screen,
      };
    default:
      return { ...state };
  }
};
export default screenShotReducer;
