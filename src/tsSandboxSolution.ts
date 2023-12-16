type DocumentClass = 'recipe' | 'article' | 'episode'

interface BaseDocument {
  id: number,
  docType: DocumentClass;
  documentName: string;
  slug: string;
}

interface FavoritableItem {
  id: number;
  documentName: string;
  imageId: string;
  authors?: Array<string>
}

type ResultShape = FavoritableItem & Record<PropertyKey, unknown>

interface RecipeDocument extends BaseDocument {
  servings: number;
  cookTime: string;
  author: string
  imageUrlId: string;
}

interface ArticleDocument extends BaseDocument {
  siteKey: string
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

type HomePageItem = RecipeDocument | ArticleDocument | EpisodeDocument

const homePageItems: Array<HomePageItem> = [
  {
    id: 1,
    docType: 'episode',
    documentName: 'Holiday Favorites',
    slug: '1-holiday-favorites',
    meta: {
      showName: 'Holiday Favorites - ATK',
      description: 'LEarn how to cook holidat favorites'
    },
    season: 1,
    episode: 5,
    thumbnail: {
      altText: 'apple pie',
      url: 'ApplePie_holliday_assets_2023'
    }
  },
  {
    id: 2,
    docType: 'recipe',
    documentName: 'Apple Pie',
    slug: '2-apple-pie',
    servings: 4,
    cookTime: '1:30:00',
    author: 'Steve Dunn',
    imageUrlId: '2023_recipe_assets_apple_pie'
  },
  {
    id: 3,
    docType: 'article',
    documentName: 'How To Not Ruin A Pie Crust',
    slug: 'article-3',
    siteKey: 'ATK',
    publicImageId: '2023_article_2023',
    author: [
      {active: true, author: 'Caren White', imageUrl: 'headshot_caren_white'}
    ]
  }
]

// Requirements: we need to transform each HomePageItem
// we need to render all these homePageItems on to card component
// for favoritng functionality and ease of use we need the result to be an object that builds off of the FavoritableItem type
// result object needs to include all original info and have no nesting

const  transform = (item: HomePageItem): ResultShape => {

  const { id, documentName, docType } = item;
  let imageId = '';
  let authors: string[] | undefined;

  switch (docType) {
    case 'recipe':
      const recipeItem = item as RecipeDocument;
      imageId = recipeItem.imageUrlId;
      authors = [recipeItem.author];
      break;

    case 'article':
      const articleItem = item as ArticleDocument;
      imageId = articleItem.publicImageId;
      authors = articleItem.author.map((a) => a.author);
      break;

    case 'episode':
      const episodeItem = item as EpisodeDocument;
      imageId = episodeItem.thumbnail.url;
      break;
  }

  const result: ResultShape = {
    id,
    documentName,
    imageId,
    authors
  };
  
  console.log(result);
  return result;

}

homePageItems.forEach(transform);
