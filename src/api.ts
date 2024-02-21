// Can we consolidate this typing?
export interface Trending  {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: IncompleteRating | CompleteRating
}

type IncompleteRating = {
  attributes: {
    avgScore: number | undefined;
    rateableId: number | undefined;
    rateableType: string | undefined;
    userRatingsCount: number | undefined;
  }
}

type CompleteRating = {
  attributes: {
    avgScore: number;
    rateableId: number;
    rateableType: string;
    userRatingsCount: number;
  }
}


export const getTrending = async (): Promise<Trending> => {
  const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk')
  const trending = await response.json()

  try {
    response.status();
  
} catch (error) { console.log("you did the error")
  
}
// not sure if correct or not. Did not add the finally block

  return trending

   // try catch block response.status
  // ifelse return console.log(error)

}