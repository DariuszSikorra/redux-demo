import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./slices/search.slice";
import gamesReducer from "./slices/games.slice";
import paginationReducer from "./slices/pagination.slice";
import apiReducer from "./slices/api.slice";

const rootReducer = combineReducers({
  search: searchReducer,
  games: gamesReducer,
  pagination: paginationReducer,
  api: apiReducer,
});

export default rootReducer;