// Requirements: we need to write a fucntion that transforms each item in the homepageItems array because...
// we need to render all these homePageItems on to identical card components
// for favoritng functionality and ease of use we need the result to be an object that builds off of the FavoritableItem type
// result object needs to include all original info and have no nesting


interface FavoritableItem {
  id: number;
  documentName: string;
  imageId: string;
  authors?: Array<string>
}

interface BaseDocument {
  id: number,
  documentName: string;
  slug: string;
}

interface RecipeDocument extends BaseDocument {
  servings: number;
  cookTime: string;
  author: string
  imageUrlId: string;
}

interface ArticleDocument extends BaseDocument {
  subHeadline: string;
  author: Array<{
    author: string;
    active: boolean;
    imageUrl: string;
  }>
  publicImageId: string
}

interface EpisodeDocument extends BaseDocument {
  meta: {
    showName: string;
    description: string;
  }
  season: number;
  episode: number;
  thumbnail: {
    altText: string;
    url: string
  }
}


const homePageItems = [
  {
    id: 1,
    documentName: 'Holiday Favorites',
    slug: '1-holiday-favorites',
    meta: {
      showName: 'Holiday Favorites - ATK',
      description: 'Learn how to cook holiday favorites'
    },
    season: 1,
    episode: 5,
    thumbnail: {
      altText: 'apple pie',
      url: 'ApplePie_holiday_assets_2023'
    }
  },
  {
    id: 2,
    documentName: 'Apple Pie',
    slug: '2-apple-pie',
    servings: 4,
    cookTime: '1:30:00',
    author: 'Steve Dunn',
    imageUrlId: '2023_recipe_assets_apple_pie'
  },
  {
    id: 3,
    documentName: 'How To Not Ruin A Pie Crust',
    subHeadline: 'Try not to ruin the holiday by folling this informative guide',
    slug: 'article-3',
    siteKey: 'ATK',
    publicImageId: '2023_article_2023',
    author: [
      {active: true, author: 'Caren White', imageUrl: 'headshot_caren_white'}
    ]
  }
]

export const TransformedData = (
  item: RecipeDocument | ArticleDocument | EpisodeDocument
): FavoritableItem => {
  if ('servings' in item) {
    const { id, documentName, imageUrlId, author } = item as RecipeDocument;
    return { id, documentName, imageId: imageUrlId, authors: [author] };
  }

  if ('subHeadline' in item) {
    const { id, documentName, publicImageId, author } = item as ArticleDocument;
    const authors = author.map(a => a.author);
    return { id, documentName, imageId: publicImageId, authors };
  }

  if ('meta' in item) {
    const { id, documentName, thumbnail, meta } = item as EpisodeDocument;
    return { id, documentName, imageId: thumbnail.url, authors: [meta.showName] };
  }

  return {} as FavoritableItem;
};

const transformedItems: Array<FavoritableItem> = homePageItems.map(TransformedData);

console.log(transformedItems);
