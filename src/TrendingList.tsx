import { Trending } from "./api";

interface TrendingListProps {
    trendingRecipes: Trending[];
}

const TrendingList: React.FC<TrendingListProps> = ({ trendingRecipes }) => {
    return (
        <ul>
            {trendingRecipes.map((trendingRecipe) => {
                return(
                    <li key={trendingRecipe.document_id}>
                        <p>Title: {trendingRecipe.title}</p>
                        <p>User Rating: {trendingRecipe.rating.attributes.userRatingsCount ?? 0}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default TrendingList;

//lint the code