import { useMemo, useContext } from 'react';
import { FormData, DisplayField, HandleChange } from './lib/types';
import { getTrendingRecipes } from './api';
import primeFactorize from './utils';
import Form from './components/CheckInForm';
import DisplayContainer from './DisplayContainer';
import AppContext from './context/AppContext';
import TrendingRecipes from './components/TrendingRecipes';

export default function ContentContainer() {

  const { user, setUser } = useContext(AppContext);

  const importantNumber = useMemo(() => primeFactorize(1000000).length, []);


  const handleNameUpdate: HandleChange = (field: string, value: string | number) => {
    setUser({ ...user, [field.toLowerCase()]: value });
  };

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
      field: 'Name',
      value: user.name,
      handleChange: handleNameUpdate,
    },
    {
      field: 'Email',
      value: user.email,
      handleChange: handleNameUpdate,
    },
  ];

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

