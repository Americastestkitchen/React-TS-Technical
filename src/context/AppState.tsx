import { ReactNode, useState } from "react";
import AppContext from "./AppContext";
import { User, TrendingRecipe } from "../lib/types";

const AppProvider = ({ children }: { children: ReactNode }) => {

  const [trendingRecipes, setTrendingRecipes] = useState<TrendingRecipe[]>([])
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
  })

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      trendingRecipes,
      setTrendingRecipes,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider