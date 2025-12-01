import { RestaurantCard } from "../RestaurantCard"
import { RestaurantBodyContainer, RestaurantContainer } from "./styles"

export const RestaurantBody = () => {
    return (
        <RestaurantBodyContainer>
            <RestaurantContainer>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </RestaurantContainer>
        </RestaurantBodyContainer>
    )
}