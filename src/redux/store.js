import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import team_reducer from "./reducers/team_reducer";


// const reducer=(initialState)=>initialState

export const store=createStore(team_reducer,composeWithDevTools())