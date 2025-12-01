import { Banner, RestaurantDesc, RestaurantDescDiv } from "./styles"

export const RestaurantBanner = () => {
    return (
        <Banner>
            <RestaurantDescDiv>
                <RestaurantDesc weight={100}>Japanese</RestaurantDesc>
                <RestaurantDesc weight={900}>Japanese Sushi</RestaurantDesc>
            </RestaurantDescDiv>
        </Banner>
    )
}