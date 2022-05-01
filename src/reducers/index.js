import { combineReducers } from "redux";
import gamesReducers from "./gamesReducers";
import detailReducer from "./detailReducer";
import screenShotReducer from "./screenReducer";
const rootReducer = combineReducers({
  games: gamesReducers,
  detail: detailReducer,
  screenshot: screenShotReducer,
});
export default rootReducer;
