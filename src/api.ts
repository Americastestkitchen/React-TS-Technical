// Can we consolidate this typing?
// we can consolidate the rating into one interface 
export interface Trending  {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating;
  // from-->rating: IncompleteRating | CompleteRating;
}

interface Rating {
  attributes: {
    avgScore: number | undefined;
    rateableId: number | undefined;
    rateableType: string | undefined;
    userRatingsCount: number | undefined;
  }
}

// Consolidated this into Rating above^

// type CompleteRating = {
//   attributes: {
//     avgScore: number;
//     rateableId: number;
//     rateableType: string;
//     userRatingsCount: number;
//   }
// }


export const getTrending = async (): Promise<Trending> => {
  try {
  const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk');

  // add if statement to check for error
  if(!response.ok) {
    throw new Error('you did the error');
  }

  const trending = await response.json();

  return trending;
} catch (error) { console.log("you did the error again", error); throw error;
// not sure if correct or not. Did not add the finally block
}
};

   // try catch block response.status