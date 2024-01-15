import { useState, useEffect, useMemo, useContext } from "react";
import { FormData, DisplayField, HandleChange } from "./lib/types";
import { getTrendingRecipes } from "./api";
import primeFactorize from "./utils";
import Form from "./Form";
import DisplayContainer from "./DisplayContainer";
import starStyle from "./star.module.css";

import AppContext from "./context/AppContext";
import Star from "./Star";
import TrendingRecipes from "./TrendingRecipes";

const ContentContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { user, setUser, trendingRecipes, setTrendingRecipes } = useContext(AppContext);

  const importantNumber = useMemo(() => primeFactorize(1000000).length, [])

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      const response = await getTrendingRecipes();

      setTrendingRecipes(response);
      setLoading(false);
    }

    if (!trendingRecipes.length) {
      fetchTrending();
    }
  }, [setTrendingRecipes, trendingRecipes.length])

  const handleNameUpdate: HandleChange = (field, value) => {
    setUser({ ...user, [field]: value })
  }

  // const getTitle = () => {
  //   if (!loading && !parseRecipeData().length) {
  //     return "Something is wrong... :("
  //   }
  //   return loading ? " LOADING... " : "Recipe Display Container";
  // }

  // const parseRecipeData = () => {
  //   if (trendingRecipes && trendingRecipes.length) {
  //     const recipeData: DisplayField[] = [
  //       {
  //         label: "Title",
  //         value: trendingRecipes[0].title,
  //       },
  //       {
  //         label: "Number of User Ratings",
  //         value: trendingRecipes[0].rating?.attributes?.userRatingsCount || 0
  //       }
  //     ]
  //     return recipeData;
  //   }
  //   return [];
  // }

  const formFields: FormData[] = [
    {
      field: "Name",
      value: user.name,
      handleChange: handleNameUpdate,
    },
    {
      field: "Email",
      value: user.email,
      handleChange: handleNameUpdate,
    },
  ]

  const displayFields: DisplayField[] = formFields.map(({ field, value }) => ({
    value,
    label: `${field} Name`,
  }));

  return (
    <div className="container">
      <Form title="Check In" fields={formFields} />
      <TrendingRecipes />
      <h5>{`Total Recipes and counting: ${importantNumber}`}</h5>
      {/* <DisplayContainer title="Form Display Container" fields={displayFields} /> */}
      {/* <DisplayContainer
        title={getTitle()}
        fields={loading ? [] : parseRecipeData()}
      /> */}
    </div>
  );
};

export default ContentContainer
