export interface Trending  {
  map(arg0: (recipe: any) => any): import("react").ReactNode;
  document_id: number;
  count: number;
  document_type: string;
  title: string;
// change this to just Rating
  rating: Rating;
}

interface RatingAtt {
  avgScore: number;
  rateableId: number;
  rateableType: string;
  userRatingsCount: number;
}

type IncompleteRating = {
  attributes: Partial<RatingAtt>
}

type CompleteRating = {
  attributes: RatingAtt
}

//giving the value that belongs to either 
type Rating = IncompleteRating | CompleteRating

// not changed
export const getTrending = async (): Promise<Trending> => {
  const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk')
  const trending = await response.json()
  return trending

}