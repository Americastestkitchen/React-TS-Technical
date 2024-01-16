import { createContext } from "react";
import { AppState } from "../lib/types";

const INITIAL_APP_STATE = {
  user: {
    name: "",
    isSignedIn: false,
  },
  setUser: () => { },
  trendingRecipes: [],
  setTrendingRecipes: () => { },
}

const AppContext = createContext<AppState>(INITIAL_APP_STATE);

export default AppContext;
