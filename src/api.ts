// Can we consolidate this typing?
interface Trending  {
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
  return trending

}