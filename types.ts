export type Name = {first: string, last: string}

export interface Trending  {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating
}

type Attributes = {
    avgScore: number
    rateableId: number 
    rateableType: string
    userRatingsCount: number 
}

type Rating = {
  attributes: Partial<Attributes>
}