import { Trending } from "./api";

interface TrendingListProps {
    trendingRecipes: Trending[];
}

const TrendingList: React.FC<TrendingListProps> = ({ trendingRecipes }) => {
    return (
        <div>
            <ul>
                {trendingRecipes.map((trendingRecipe) => {
                    return(
                    <li key={trendingRecipe.document_id}>
                        Title: {trendingRecipe.title}
                        User Rating: {trendingRecipe.rating.attributes.userRatingsCount ?? 0}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default TrendingList;