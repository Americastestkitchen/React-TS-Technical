export const getTrendingRecipes = async () =>
  await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk');
