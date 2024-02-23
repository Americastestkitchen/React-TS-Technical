// Can we consolidate this typing?
export interface Trending  {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating
}


// I thought it might make sense to consolidate the typing by collapsing bothe the incompleteRating and CompleteRating into a single Rating with a new 'complete' field for indexing
type Rating = {
  attributes: {
    avgScore: number | undefined;
    rateableId: number | undefined;
    rateableType: string | undefined;
    userRatingsCount: number | undefined;
    complete: boolean | undefined;
  }
}

// type IncompleteRating = {
//   attributes: {
//     avgScore: number | undefined;
//     rateableId: number | undefined;
//     rateableType: string | undefined;
//     userRatingsCount: number | undefined;
//   }
// }

// type CompleteRating = {
//   attributes: {
//     avgScore: number;
//     rateableId: number;
//     rateableType: string;
//     userRatingsCount: number;
//   }
// }


// error handling, ftch error syntaz
export const getTrending = async (): Promise<Trending[]> => {
  const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk')
  const trending = await response.json()
  return trending

}