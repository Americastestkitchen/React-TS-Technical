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


export const getTrending = async (): Promise<Trending[]> => {
  try {
    const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk')
  
    if(!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const trending = await response.json()
    return trending
  } catch (error) {
    console.error('Error in fetching trending data:', error)
    throw(error)
  }
}