import { TrendingRecipe } from './lib/types';

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeFactorize(n: number) {
  const start = performance.now();
  const numbers = Array.from({ length: n }, (_, index) => index);
  const primes = numbers.filter((num) => isPrime(num));
  const end = performance.now();
  console.log(`calc for Important number took ${end - start}ms to run`);
  return primes;
}

function getNewAverage(currCount: number, prevAvg: number, newScore: number) {
  const totalStars = prevAvg * currCount + newScore;
  return Math.round((totalStars / (currCount + 1)) * 100) / 100;
}

export function updateRating(recipe: TrendingRecipe, stars: number) {
  let { userRatingsCount, avgScore } = recipe.rating.attributes;

  userRatingsCount = userRatingsCount || 0;
  avgScore = avgScore || 0;

  const attributes = {
    ...recipe.rating.attributes,
    userRatingsCount: userRatingsCount + 1,
    avgScore: getNewAverage(userRatingsCount, avgScore, stars),
  };

  const rating = { ...recipe.rating, attributes };

  return {
    ...recipe,
    rating,
    ratedByUser: stars,
  };
}
